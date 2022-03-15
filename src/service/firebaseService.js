import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { auth, googleProvider } from '../firebase-config';

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    return user;
  } catch(e) {
    throw new Error(e.code);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch(e) {
    throw new Error(e.code);
  }
};

export const createUserAccount = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch(e) {
    throw new Error(e.code);
  }
};