import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouts = ({ children }) => {

  const { user, loading } = use(AuthContext);
  const location = useLocation()

  if (loading) {
    return <div className='max-w-screen-xl mx-auto text-center my-[430px]'><span className="loading loading-ring loading-xl text-primary"></span></div>
  }
  if (!user) {
    return <Navigate state={location?.pathname} to='/login'></Navigate>
  }
  return children;
};

export default PrivateRouts;