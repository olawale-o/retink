import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import { Login } from './components/Auth';
import Home from './pages/Home';  
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index path="/" element={(<Home />)} />
          <Route path="login" element={(<Auth />)}>
            <Route index path="" element={(<Login />)} />
            <Route path="login" element={(<Login />)} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
