import React from 'react';
import AuthContext from './context';
// import { getAuth } from 'firebase/auth';
// import { firebaseAuth } from '../../firebase-config';
// onAuthStateChanged(firebaseAuth, async (currentUser) => {
//   // const token = await currentUser?.getIdToken();
//   // setIdToken((prev) => ({ ...prev, idToken: token, }));
// });  

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [authError, setAuthError] = React.useState(null);
  const [idToken, setIdToken] = React.useState(null);
  return (
    <AuthContext.Provider
      value={{
        user: auth,
        setUser: setAuth,
        authError,
        setAuthError,
        loading,
        setLoading,
        idToken,
        setIdToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
