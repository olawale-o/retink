import { Outlet } from "react-router-dom";
import './style.css';

const Auth = () => {
  return (
    <div className="auth">
      <Outlet />
    </div>
  );
};

export default Auth;
