import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserProfile from '../../api/getUserProfile';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setToken } from '../../redux/slice/tokenSlice';
import { setUserProfile } from '../../redux/slice/userProfileSlice';

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
        alert(error);
      }
    }
  };

  useEffect(() => {
    fetchAccessToken();
    fetchUserProfile();
  });

  useEffect(() => {
    if (token !== null && userProfile !== null) {
      navigate('/');
    }
  }, [token, userProfile, navigate]);

  return null;
};

export default Callback;
