import React from 'react';
import { AuthContext } from '../../context';
import google from '../../assets/google.png';
const Form  = ({ onSubmit, setEmail, setPassword, btnName }) => {
  const { continueWithGoogle, authError, loading } = React.useContext(AuthContext);

  return (
    <div className="form">
      <span className="error">{authError && authError}</span>
      <button type="button" onClick={continueWithGoogle} className="google__button">
        <span className="google">
          <img src={google} alt="google" />
        </span>
        <span className="btn__text">Continue with Google</span>
      </button>
      <form onSubmit={onSubmit}>
        <div className="field">
            <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
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
