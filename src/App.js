import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import { Login, Register } from './components/Auth';
import Home from './pages/Home';

import { AuthProvider } from './context';
import Services from './pages/Services';

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
