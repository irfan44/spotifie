import { useEffect } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { resetToken } from 'redux/slice/tokenSlice';
import { resetUserProfile } from 'redux/slice/userProfileSlice';

const Logout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(resetToken());
    dispatch(resetUserProfile());
  };

  useEffect(() => {
    handleLogout();
  });

  return null;
};
export default Logout;
