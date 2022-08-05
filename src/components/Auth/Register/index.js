import React from 'react';
import { AuthContext } from '../../../context';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import { createUserAccount } from '../../../service/firebaseService';

const Register = () => {
  const navigate = useNavigate();
  const { setLoading, authError, setAuthError } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserAccount(email, password);
      navigate('/', { replace: true });
    } catch(e) {
      setLoading(false);
      if(e.message === 'auth/email-already-in-use') {
        setAuthError('Email already exists');
      }
    }
  };
  return (
    <div className="auth">
      <Form
        onSubmit={onRegister}
        error={authError}
        btnName="Create"
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Register;
