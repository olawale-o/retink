import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, logInWithEmailAndPassword } from '../../../service/firebaseService';
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
      const user = await logInWithEmailAndPassword(email, password);
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

  const continueWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      onUpdateUser(user);
      if (user) {
        navigate('/', { replace: true });
      }
    } catch(e) {
      console.log(e);
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
        googleSignIn={continueWithGoogle}
      />
    </div>
  );
};

export default Login;
