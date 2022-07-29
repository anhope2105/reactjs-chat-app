import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCQ_3wcN7nIFCoiSOeWd6w2LrntLbuqqJQ',
  authDomain: 'react-firebase-b2f38.firebaseapp.com',
  projectId: 'react-firebase-b2f38',
  storageBucket: 'react-firebase-b2f38.appspot.com',
  messagingSenderId: '00450826615',
  appId: '1:700450826615:web:e18b3f21b8044a8d841972',
  measurementId: 'G-190WK8ST9J',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
