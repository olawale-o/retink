import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context";

const RequireAuth = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <>
      {user?.accessToken ? <Outlet /> : <Navigate to="/auth" replace />}
    </>
  )
};

export default RequireAuth;
