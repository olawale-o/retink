import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import AuthContext from '../../../context';
import Form from '../Form';

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const { onUpdateUser } = React.useContext(AuthContext);

  const login = async (e) => {
    e.preventDefault();
    try {
      const user  = await createUserWithEmailAndPassword(auth, email, password);
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

  return (
    <div className="login">
      <Form
        onSubmit={login}
        error={error}
        btnName="Create"
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Register;
