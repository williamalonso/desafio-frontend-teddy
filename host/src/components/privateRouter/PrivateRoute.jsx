// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet, useLocation  } from 'react-router-dom';
import { getAuthenticatedUser } from '../../utils/auth';

const PrivateRoute = () => {
  const user = getAuthenticatedUser();
  const location = useLocation();
  
  if (!user) {
    localStorage.setItem('redirectPath', location.pathname + location.search);
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;