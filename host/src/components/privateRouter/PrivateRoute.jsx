// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthenticatedUser } from '../../utils/auth';

const PrivateRoute = () => {
  const user = getAuthenticatedUser();
  
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;