import AuthContext from './context';

const AuthProvider = ({
   value: {user, setUser, authError, loading, continueWithGoogle, onLogIn, setEmail, onRegister }, children
  }) => {
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authError,
        loading,
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
