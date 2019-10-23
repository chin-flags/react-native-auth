const firebase = require('firebase');
const config = require('../utils/config');

const signInWithFacebook = (request, response) => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      return response.status(200).send(result.user);
    })
    .catch(err => {
      return response.status(500).send(err);
    });
};

module.exports = {signInWithFacebook};
