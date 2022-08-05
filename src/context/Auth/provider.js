import React from 'react';
import AuthContext from './context';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../firebase-config';

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [authError, setAuthError] = React.useState(null);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    console.log('onAuthStateChanged');
    if (currentUser) {
      setAuth(currentUser);
      setAuthError(null);
      setLoading(false);
    }
  });
  return (
    <AuthContext.Provider
      value={{
        user: auth,
        setUser: setAuth,
        authError,
        setAuthError,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
