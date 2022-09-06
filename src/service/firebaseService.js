import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth, googleProvider } from '../firebase-config';
import { post } from '../api/axios';

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(firebaseAuth, googleProvider);
    if (user) {
      const dbUser = await post(
        'auth/signup', {
          email: user.email,
          fullName: user?.displayName || 'full name',
          uid: user.uid,
          providerId: user.providerId,
          photoUrl: user?.photoURL,
        },{
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });
      return dbUser;
    }
  } catch(e) {
    throw new Error(e.code);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
    if (user) {
      const response = await post('auth/login',{ email: user.email});
      return response;
    }
    return null;
  } catch(e) {
    throw new Error(e.code);
  }
};

export const createUserAccount = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    if (user) {
      const dbUser = await post(
        'auth/signup', {
          email: user.email,
          fullName: user?.displayName || 'full name',
          uid: user.uid,
          providerId: user.providerId,
          photoUrl: user?.photoURL,
        },{
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });
      return dbUser;
    }
    return user;
  } catch(e) {
    console.log(e);
    throw new Error(e.code);
  }
};