import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase-config';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import { Login, Register } from './components/Auth';
import Home from './pages/Home';
import AuthContext from './context';

function App() {
  const [user, setUser] = React.useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="App">
      <AuthContext.Provider value={{
        user,
        onUpdateUser: () => {
          setUser(user);
        }
      }}>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index path="/" element={(<Home />)} />
            <Route path="auth" element={(<Auth />)}>
              <Route index path="" element={(<Login />)} />
              <Route path="login" element={(<Login />)} />
              <Route path="register" element={(<Register />)} />
            </Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
