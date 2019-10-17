const firebase = require('firebase');
const config = require('../utils/config');

const {db} = require('../utils/admin');
const {validateSignUpData, validateSignInData} = require('../utils/validators');

firebase.initializeApp(config);

const signUpEmailAndPassword = (request, response) => {
  let idToken, uId;
  const newUser = {
    email: request.body.email,
    password: request.body.password,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
  };

  const {errors, valid} = validateSignUpData(newUser);
  if (!valid) response.status(400).json(errors);

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(data => {
      uId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(token => {
      idToken = token;
      const newUserCreds = {
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        email: newUser.email,
        createdAt: new Date().toISOString(),
      };
      return db.doc(`/users/${uId}`).set(newUserCreds);
    })
    .then(() => {
      return response.status(201).json({idToken});
    })
    .catch(err => {
      console.error(err);
      return response.status(500).json({error: err.code});
    });
};

const signInEmailAndPassword = (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password,
  };

  const {errors, valid} = validateSignInData(user);
  if (!valid) return response.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return response.status(201).json({token});
    })
    .catch(err => {
      console.error(err);
      if (err.code === 'auth/wrong-password') {
        return response
          .status(403)
          .json({general: 'Wrong credentials, Please try again'});
      }
      return response.status(500).json({error: err.code});
    });
};

module.exports = {signUpEmailAndPassword, signInEmailAndPassword};
