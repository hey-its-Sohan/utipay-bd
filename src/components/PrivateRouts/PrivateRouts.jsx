import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRouts = ({ children }) => {

  const { user, loading } = use(AuthContext);

  if (loading) {
    return <span className="loading loading-ring loading-xl text-primary"></span>
  }
  if (!user) {
    return <Navigate to='/login'></Navigate>
  }
  return children;
};

export default PrivateRouts;