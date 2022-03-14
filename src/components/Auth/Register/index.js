import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context';
import Form from '../Form';
import { signInWithGoogle, createUserAccount } from '../../../service/firebaseService';

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const { onUpdateUser } = React.useContext(AuthContext);

  const login = async (e) => {
    e.preventDefault();
    try {
      const user  = await createUserAccount(email, password);
      onUpdateUser(user);
      if (user) {
        navigate('/', { replace: true });
      }
    } catch(e) {
      if(e.code === 'auth/email-already-in-use') {
        setError('Email already exists');
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
        btnName="Create"
        setEmail={setEmail}
        setPassword={setPassword}
        googleSignIn={continueWithGoogle}
      />
    </div>
  );
};

export default Register;
