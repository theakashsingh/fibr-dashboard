// src/components/PrivateRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  return children;
};

export default PrivateRoute;