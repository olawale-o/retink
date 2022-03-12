// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  authDomain: "riverpod-crime.firebaseapp.com",
  projectId: "riverpod-crime",
  storageBucket: "riverpod-crime.appspot.com",
  messagingSenderId: "1029610132870",
  appId: "1:1029610132870:web:c105ca16ed6f0754554807",
  measurementId: "G-3MM2Z2TC8K"
};

const app = initializeApp(firebaseConfig);

export const store = getFirestore(app);

export const auth = getAuth(app);