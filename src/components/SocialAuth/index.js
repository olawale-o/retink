import React from 'react';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { AuthContext } from '../../context';
import { signInWithGoogle } from '../../service/firebaseService';

const SocialAuth = () => {
  const navigate = useNavigate();
  const { setUser, setLoading } = React.useContext(AuthContext);
  const continueWithGoogle = async () => {
    setLoading(true);
    try {
      const user = await signInWithGoogle();
      setUser(user);
      if (user) {
        setLoading(false);
        navigate('/', { replace: true });
      }
    } catch(e) {
        setLoading(false);
        console.log(e);
    }
  };
  return (
    <div className="social-btns">
      <button type="button" onClick={continueWithGoogle} className="google__button">
        <span className="google">
          <img src={google} alt="google" />
        </span>
        <span className="btn__text">Continue with Google</span>
      </button>
    </div>
  )
};

export default SocialAuth;
