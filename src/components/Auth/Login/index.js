import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';
import Form from '../Form';
import { logInWithEmailAndPassword } from '../../../service/firebaseService';

const Login = () => {
  const navigate = useNavigate();
  const { setLoading, setAuthError } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLogIn = async (e) => {
    console.log('onLogIn');
    e.preventDefault();
    setLoading(true);
    try {
      await logInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      navigate('/', { replace: true });
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
  return (
    <div className="auth">
      <Form
        onSubmit={onLogIn}
        btnName="Login"
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
