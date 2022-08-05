import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { firebaseAuth, googleProvider } from '../firebase-config';

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(firebaseAuth, googleProvider);
    return user;
  } catch(e) {
    throw new Error(e.code);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return user;
  } catch(e) {
    throw new Error(e.code);
  }
};

export const createUserAccount = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    return user;
  } catch(e) {
    throw new Error(e.code);
  }
};