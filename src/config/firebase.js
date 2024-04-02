// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBfCSIcCZqjbxc28_kzYUcMZtMMoHe2uc",
  authDomain: "fish-iswac.firebaseapp.com",
  projectId: "fish-iswac",
  storageBucket: "fish-iswac.appspot.com",
  messagingSenderId: "392584800147",
  appId: "1:392584800147:web:61f2a3ee50e95455f9ea66",
  measurementId: "G-58V2QCHGRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider()