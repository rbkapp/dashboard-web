import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBN6Bv9K-gIxRxVGDiIwaKgsNyqJFOnWtk",
  authDomain: "rebimboka-dev.firebaseapp.com",
  projectId: "rebimboka-dev",
  storageBucket: "rebimboka-dev.appspot.com",
  messagingSenderId: "855262855661",
  appId: "1:855262855661:web:7f5ef42a76cc72234fa7e4",
  measurementId: "G-THHSNBQTJJ"
};
/*
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
 */
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = getAuth(firebaseApp);

auth.onAuthStateChanged(user => { 
  // Check for user status
});

export default db;