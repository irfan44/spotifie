/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import isLogin from 'utils/isLogin';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const token = useAppSelector((state) => state.token.value);
  if (isLogin(token)) {
    return <>{children}</>;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
