import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAW_4pkXP0p-Ly7VpOlDmKeoF-Yk1VHen0",
  authDomain: "mypitchhub-345be.firebaseapp.com",
  projectId: "mypitchhub-345be",
  storageBucket: "mypitchhub-345be.appspot.com",
  messagingSenderId: "881108704488",
  appId: "1:881108704488:web:5f331ea1927b4df7befd5d"
};

const app = initializeApp(firebaseConfig);

export const store = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export const firebaseAuth = getAuth(app);