import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { signInWithGoogle, logInWithEmailAndPassword, createUserAccount } from './service/firebaseService';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import { Login, Register } from './components/Auth';
import Home from './pages/Home';
import AuthContext from './context';
import Services from './pages/Services';

const queryClient = new QueryClient();

function App(){
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [authError, setAuthError] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const continueWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      setUser(user);
      if (user) {
        navigate('/', { replace: true });
      }
    } catch(e) {
      console.log(e);
    }
  };

  const onLogIn = async (e) => {
    e.preventDefault();
    try {
      const user = await logInWithEmailAndPassword(email, password);
      setUser(user);
      if (user) {
        setAuthError(null);
        setEmail(null);
        setPassword(null);
        navigate('/', { replace: true });
      }
    } catch(e) {
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
    try {
      const user  = await createUserAccount(email, password);
      setUser(user);
      if (user) {
        setAuthError(null);
        setEmail(null);
        setPassword(null);
        navigate('/', { replace: true });
      }
    } catch(e) {
      if(e.message === 'auth/email-already-in-use') {
        setAuthError('Email already exists');
      }
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AuthContext.Provider value={{
          user,
          authError,
          onUpdateUser: () => {
            setUser(user);
          },
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
        </AuthContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
