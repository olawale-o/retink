import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { signInWithGoogle, logInWithEmailAndPassword, createUserAccount } from './service/firebaseService';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import { Login, Register } from './components/Auth';
import Home from './pages/Home';

import { AuthProvider } from './context';
import Services from './pages/Services';

const queryClient = new QueryClient();

function App(){
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [authError, setAuthError] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const continueWithGoogle = async () => {
    setLoading(true);
    try {
      const user = await signInWithGoogle();
      setUser(user);
      if (user) {
        setLoading(false);
        navigate('/', { replace: true });
      }
    } catch(e) {
      setLoading(false);
      console.log(e);
    }
  };

  const onLogIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await logInWithEmailAndPassword(email, password);
      setUser(user);
      if (user) {
        setAuthError(null);
        setEmail(null);
        setPassword(null);
        setLoading(false);
        navigate('/', { replace: true });
      }
    } catch(e) {
      setLoading(false);
      if (e.message === 'auth/user-not-found') {
        setAuthError('Please provide valid credentials');
      }
      if (e.message === 'auth/wrong-password') {
        setAuthError('Please provide valid credentials');
      }
    }
  };

  const onRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user  = await createUserAccount(email, password);
      setUser(user);
      if (user) {
        setAuthError(null);
        setEmail(null);
        setPassword(null);
        setLoading(false);
        navigate('/', { replace: true });
      }
    } catch(e) {
      setLoading(false);
      if(e.message === 'auth/email-already-in-use') {
        setAuthError('Email already exists');
      }
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AuthProvider value={{
          user,
          setUser,
          authError,
          loading,
          continueWithGoogle,
          login: onLogIn,
          register: onRegister,
          setEmail,
          setPassword,
        }}>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index path="/" element={(<Home />)} />
              <Route path=":id" element={(<Services />)} />
              <Route path="auth" element={(<Auth />)}>
                <Route index path="" element={(<Login />)} />
                <Route path="login" element={(<Login />)} />
                <Route path="register" element={(<Register />)} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
