import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_PITCHHUB_KEY,
  authDomain: process.env.REACT_APP_PITCHHUB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PITCHHUB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PITCHHUB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PITCHHUB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PITCHHUB_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const store = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export const firebaseAuth = getAuth(app);