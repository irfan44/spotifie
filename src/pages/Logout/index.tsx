import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { resetToken } from 'redux/slice/tokenSlice';
import { resetUserProfile } from 'redux/slice/userProfileSlice';
import isLogin from 'utils/isLogin';

const Logout = () => {
  const token = useAppSelector((state) => state.token.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetToken());
    dispatch(resetUserProfile());
  };

  useEffect(() => {
    handleLogout();
  });

  useEffect(() => {
    if (!isLogin(token)) {
      navigate('/login');
    }
  });

  return null;
};
export default Logout;
