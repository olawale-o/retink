import React from 'react';
import { AuthContext } from '../../context';
import SocialAuth from '../SocialAuth';
const Form  = ({ onSubmit, email, password, setEmail, setPassword, btnName }) => {
  const { authError, loading } = React.useContext(AuthContext);

  return (
    <div className="form">
      <span className="error">{authError && authError}</span>
      <SocialAuth />
      <form onSubmit={onSubmit}>
        <div className="field">
            <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            />
        </div>
        <div className="field">
            <input
            type="password"
            name="password"
            placeholder="******"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            />
        </div>
        <div className="action">
          {loading && <div className="loading" />}
          {!loading && (<button
            type="submit"
            className="btn__link btn__primary"
          >
            { btnName }
          </button>
        )}
        </div>
      </form>
    </div>
  );
};

export default Form;
