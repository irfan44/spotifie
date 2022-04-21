import { useEffect } from 'react';
import Button from '../../components/common/Button';
import getFullUrl from '../../utils/getFullUrl';

const Login = () => {
  const endpointUrl = 'https://accounts.spotify.com/authorize';
  const bodyParams = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    response_type: 'token',
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    scope: 'playlist-modify-private, playlist-read-private',
    state: 'BOQ9vL6dvX2CUlmk',
  };

  const authUrl = getFullUrl(endpointUrl, bodyParams);

  const handleLogin = () => {
    window.location.href = authUrl;
  };

  useEffect(() => {
    document.title = 'Login - Spotifie';
  });

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex h-screen flex-col">
        <div className="py-4">
          <h2 className="leading-tight text-green-500">Spotifie</h2>
        </div>
        <div className="flex grow flex-col justify-center text-center">
          <div className="space-y-4">
            <h3>Welcome to Spotifie!</h3>
            <p>This project is a implementation of spotify&apos;s playlist</p>
            <Button
              title="Login with Spotify"
              type="button"
              variant="tertiary"
              handleOnClick={handleLogin}
            />
          </div>
        </div>
        <div className="flex justify-center py-4">
          <p className="text-sm">© 2022 Irfan Nurghiffari Muhajir</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
