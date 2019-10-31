import app from 'firebase/app';
import 'firebase/auth';

export const fbConfig = {
  apiKey: 'AIzaSyBv1OInDHt-lTffW_AQeAMeS632TB_HV3s',
  authDomain: 'react-native-auth-functions.firebaseapp.com',
  databaseURL: 'https://react-native-auth-functions.firebaseio.com',
  projectId: 'react-native-auth-functions',
  storageBucket: 'react-native-auth-functions.appspot.com',
  messagingSenderId: '757682168775',
  appId: '1:757682168775:web:c60351e4ecf7143068afe2',
};

class Firebase {
  constructor() {
    app.initializeApp(fbConfig);
    this.auth = app.auth();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doResetPassword = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
}

export default Firebase;
