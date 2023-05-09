// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGI-o4YnzChdmgSzvud-ric-oiG5oFemg",
  authDomain: "tapp-c7909.firebaseapp.com",
  projectId: "tapp-c7909",
  storageBucket: "tapp-c7909.appspot.com",
  messagingSenderId: "908052576595",
  appId: "1:908052576595:web:5b656e4c8312e6247209a6"
};

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
