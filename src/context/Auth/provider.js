// import { useState } from 'react';
import AuthContext from './context';

const AuthProvider = ({
   value: { user, setUser, authError, loading, continueWithGoogle, onLogIn, setEmail, onRegister }, children
  }) => {
  // const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        user,
        authError,
        loading,
        onUpdateUser: () => {
          setUser(user);
        },
        continueWithGoogle,
        login: onLogIn,
        register: onRegister,
        setEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
