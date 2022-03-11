import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import AuthContext from '../../../context';
import Form from '../Form';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const { onUpdateUser } = React.useContext(AuthContext);

  const login = async (e) => {
    e.preventDefault();
    try {
      const user  = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      onUpdateUser(user);
      if (user) {
        navigate('/', { replace: true });
      }
    } catch(e) {
      if (e.code === 'auth/user-not-found') {
        setError('Please provide valid credentials');
      }
      if (e.code === 'auth/wrong-password') {
        setError('Please provide valid credentials');
      }
    }
  };

  return (
    <div className="login">
      <Form
        onSubmit={login}
        error={error}
        btnName="Login"
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
