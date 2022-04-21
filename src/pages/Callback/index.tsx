import { useEffect } from 'react';
import getUserProfile from 'api/getUserProfile';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { openModal } from 'redux/slice/modalSlice';
import { resetToken, setToken } from 'redux/slice/tokenSlice';
import { resetUserProfile, setUserProfile } from 'redux/slice/userProfileSlice';
import Error from 'types/error';
import isLogin from 'utils/isLogin';

const Callback = () => {
  const token = useAppSelector((state) => state.token.value);
  const userProfile = useAppSelector((state) => state.userProfile.id);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchAccessToken = () => {
    const url = window.location.hash.substring(1);
    const searchParams = new URLSearchParams(url);
    const accessToken = searchParams.get('access_token');
    if (accessToken !== null) {
      dispatch(setToken(accessToken));
    }
  };

  const handleFetchError = (error: Error) => {
    if (error.response.status === 403) {
      const errorMessage = error.response.data;
      dispatch(
        openModal({
          status: 'error',
          message: errorMessage,
        })
      );
    } else {
      const errorMessage = error.response.data.error.message;
      dispatch(
        openModal({
          status: 'error',
          message: errorMessage,
        })
      );
    }
    dispatch(resetToken());
    dispatch(resetUserProfile());
    navigate('/login');
  };

  const fetchUserProfile = async () => {
    if (token !== null) {
      try {
        const response = await getUserProfile(token);
        if (response !== null) {
          dispatch(
            setUserProfile({
              id: response.id,
              displayName: response.name,
              displayImage: response.images,
              href: response.href,
            })
          );
        }
      } catch (error) {
        const errorResponse = error as Error;
        handleFetchError(errorResponse);
      }
    }
  };

  useEffect(() => {
    fetchAccessToken();
    fetchUserProfile();
  });

  useEffect(() => {
    if (isLogin(token) && userProfile !== null) {
      navigate('/');
    }
  }, [token, userProfile, navigate]);

  return null;
};

export default Callback;
