/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { layout } from '../utils/constants';
import SocialLoginButton from './SocialLoginButton';

const facebook = require('../../assets/images/facebook.png');
const twitter = require('../../assets/images/twitter.png');
const gmail = require('../../assets/images/gmail.png');
const phone = require('../../assets/images/phone.png');

const handleFacebookLogin = () => {
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
              .then(({ user: { uid, displayName, email, photoURL } }) => {
                const newUser = {
                  id: uid,
                  fullName: displayName,
                  email,
                  photoURL,
                };
                firestore()
                  .collection('users')
                  .doc(newUser.id)
                  .set(newUser)
                  .then(({ user }) => {
                    alert(`${user.uid} created`);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              })
          })
          .catch((err) => console.log(err))
      }
    })
    .catch((err) => console.log(err))
};

const SocialLogin = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: layout.sizes.padding , justifyContent: 'space-between', marginTop: 20 }}>
      <SocialLoginButton image={facebook} onPress={handleFacebookLogin} />
      <SocialLoginButton image={twitter} />
      <SocialLoginButton image={gmail} />
      <SocialLoginButton image={phone} />
    </View>
  );
};

export default SocialLogin;
