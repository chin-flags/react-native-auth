/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useContext, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const authHook = useProvideAuth();
  return <authContext.Provider value={authHook}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};


function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signin = (email, password) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      })
      .catch((err) => console.log(err));
  };

  const facebookLogin = (navigate) => {
    LoginManager.logInWithPermissions([
      "public_profile",
      "email"
    ])
      .then((result) => {
        if (!result.isCancelled) {
          AccessToken.getCurrentAccessToken()
            .then(({ accessToken }) => {
              const credential = auth.FacebookAuthProvider.credential(accessToken);
              auth()
                .signInWithCredential(credential)
                .then((
                  {
                    user:
                  {
                    uid,
                    displayName,
                    email,
                    photoURL,
                  },
                  },
                ) => {
                  const newUser = {
                    id: uid,
                    fullName: displayName,
                    email,
                    photoURL,
                    createdAt: new Date().toISOString(),
                  };
                  firestore()
                    .collection('users')
                    .doc(newUser.id)
                    .set(newUser)
                    .then(() => {
                      navigate('Home', { user: newUser });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                })
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err))
  };

  // const signup = (email, password) => {
  //   return firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(response => {
  //       setUser(response.user);
  //       return response.user;
  //     });
  // };

  const signout = () => {
    return auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // const sendPasswordResetEmail = email => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signout,
    socialLogin: {
      facebook: facebookLogin,
    },
  };
}