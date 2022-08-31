// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw6APDhu_vAz6j4k8Ww__Yp_oEArmsySo",
  authDomain: "fir-auth-9aafb.firebaseapp.com",
  projectId: "fir-auth-9aafb",
  storageBucket: "fir-auth-9aafb.appspot.com",
  messagingSenderId: "857904237475",
  appId: "1:857904237475:web:628c0c30ad179b8e252816"
};

// Initialize Firebase
let app;
if (firebase.apps.length ===0) {
  app = firebase.initializeApp(firebaseConfig); 
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};