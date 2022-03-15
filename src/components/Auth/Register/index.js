import React from 'react';
import AuthContext from '../../../context';
import Form from '../Form';

const Register = () => {
  const { setEmail, setPassword, register, authError} = React.useContext(AuthContext);
  return (
    <div className="auth">
      <Form
        onSubmit={register}
        error={authError}
        btnName="Create"
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Register;
