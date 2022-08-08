import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks';

const RequireAuth = () => {
  const { user } = useAuth();
  return (
    <>
      {user?.accessToken ? <Outlet /> : <Navigate to="/auth" replace />}
    </>
  )
};

export default RequireAuth;
