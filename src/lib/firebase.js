// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjIeV06g6b6jzXb2ZnEqv1IVZ_2QPVf8k",
  authDomain: "codefeet-21b6e.firebaseapp.com",
  projectId: "codefeet-21b6e",
  storageBucket: "codefeet-21b6e.firebasestorage.app",
  messagingSenderId: "13782970427",
  appId: "1:13782970427:web:3bf1ef1465bea664d6ac1e",
  measurementId: "G-E33HG7PP8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);