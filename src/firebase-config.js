import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  authDomain: process.env.REACT_APP_RETINK_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_RETINK_PROJECT_ID,
  storageBucket: process.env.REACT_APP_RETINK_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_RETINK_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_RETINK_APP_ID,
  measurementId: process.env.REACT_APP_RETINK_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const store = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);