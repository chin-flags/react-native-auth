const functions = require('firebase-functions');
const app = require('express')();

const {
  signUpEmailAndPassword,
  signInEmailAndPassword,
} = require('./handlers/emailPasswordAuth');

const {signInWithFacebook} = require('./handlers/facebookAuth');

app.post('/signup', signUpEmailAndPassword);
app.post('/signin', signInEmailAndPassword);
app.post('/fbSignin', signInWithFacebook);

exports.api = functions.https.onRequest(app);
