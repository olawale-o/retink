import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import './style.css';
import { useAuth } from "../../hooks";

const Auth = () => {
  const { user } = useAuth();
  return (
    <div className="auth">
      {!user?.accessToken ? (<Outlet />) : (<Navigate to="/about" replace />)}
    </div>
  );
};

export default Auth;
