const functions = require('firebase-functions');
const app = require('express')();

const {
  signUpEmailAndPassword,
  signInEmailAndPassword,
} = require('./handlers/emailPasswordAuth');

app.post('/signup', signUpEmailAndPassword);
app.post('/signin', signInEmailAndPassword);

exports.api = functions.https.onRequest(app);
