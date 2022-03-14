import React from 'react';
import AuthContext from '../../../context';
import Form from '../Form';

const Login = () => {
  const { login, setEmail, setPassword } = React.useContext(AuthContext);
  return (
    <div className="auth">
      <Form
        onSubmit={login}
        btnName="Login"
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
