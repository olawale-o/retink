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
    return user;
  } catch(e) {
    throw new Error(e.code);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
    if (user) {
      const response = await post('user/login',{ email: user.email});
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
        'user/signup', {
          email: user.email,
          full_name: user?.displayName || 'full name',
          uid: user.uid,
          provider_id: user.providerId,
          photo_url: user?.photoURL,
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