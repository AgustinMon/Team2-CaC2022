// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "team2-cac2022.firebaseapp.com",
  projectId: "team2-cac2022",
  storageBucket: "team2-cac2022.appspot.com",
  messagingSenderId: "75355051101",
  appId: "1:75355051101:web:01f91340b851f639e469b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);