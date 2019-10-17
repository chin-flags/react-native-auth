const admin = require('firebase-admin');
var serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-native-auth-functions.firebaseio.com',
});
//admin.initializeApp();

const db = admin.firestore();

module.exports = {admin, db};
