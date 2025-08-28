// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjIeV06g6b6jzXb2ZnEqv1IVZ_2QPVf8k",
  authDomain: "codefeet-21b6e.firebaseapp.com",
  projectId: "codefeet-21b6e",
  storageBucket: "codefeet-21b6e.appspot.com",
  messagingSenderId: "13782970427",
  appId: "1:13782970427:web:3bf1ef1465bea664d6ac1e",
  measurementId: "G-E33HG7PP8S"
};

// ✅ Firebase app initialize
const app = initializeApp(firebaseConfig);

// ✅ Auth export
export const auth = getAuth(app);