import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCr9O3sqrC1BRE6rF8V94RZi6D9KJKEXkk",
    authDomain: "laptopslogger.firebaseapp.com",
    projectId: "laptopslogger",
    storageBucket: "laptopslogger.appspot.com",
    messagingSenderId: "1045549159959",
    appId: "1:1045549159959:web:339be596a9a7ddf0a4ae52",
    measurementId: "G-YDBCCLDYT8"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
  