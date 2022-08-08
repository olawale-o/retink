import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import { Login, Register } from './components/Auth';
import Home from './pages/Home';

import { AuthProvider } from './context';
import Services from './pages/Services';
import { About, RequireAuth, PersistAuth } from './pages';

const queryClient = new QueryClient();

function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index path="/" element={(<Home />)} />
              <Route path=":id" element={(<Services />)} />
              <Route path="auth" element={(<Auth />)}>
                <Route index element={(<Navigate to="login" />)} />
                <Route path="login" element={(<Login />)} />
                <Route path="register" element={(<Register />)} />
              </Route>
              <Route element={(<PersistAuth />)}>
                <Route element={(<RequireAuth />)}>
                  <Route path="about" element={(<About />)} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
