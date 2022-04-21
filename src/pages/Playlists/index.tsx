import { useEffect, useState } from 'react';
import getUserPlaylists from 'api/getUserPlaylists';
import Container from 'components/layouts/Container';
import PlaylistsCard from 'components/PlaylistsCard';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { openModal } from 'redux/slice/modalSlice';
import { resetToken } from 'redux/slice/tokenSlice';
import { resetUserProfile } from 'redux/slice/userProfileSlice';
import Error from 'types/error';
import isLogin from 'utils/isLogin';

type Playlist = {
  playlistId: string;
  name: string;
  imgUrl?: string;
  imgAlt?: string;
  owner: string;
};

const Playlists = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const token = useAppSelector((state) => state.token.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFetchError = (error: Error) => {
    const errorMessage = error.response.data.error.message;
    dispatch(
      openModal({
        status: 'error',
        message: errorMessage,
      })
    );
    dispatch(resetToken());
    dispatch(resetUserProfile());
    navigate('/login');
  };

  const fetchPlaylists = async () => {
    if (token !== null) {
      try {
        const response = await getUserPlaylists(token);
        setPlaylists(response);
      } catch (error) {
        const errorResponse = error as Error;
        handleFetchError(errorResponse);
      }
    }
  };

  const renderPlaylists = () => {
    return playlists.map((playlist) => {
      return (
        <PlaylistsCard
          key={playlist.playlistId}
          playlistId={playlist.playlistId}
          imgAlt={playlist.imgAlt}
          imgUrl={playlist.imgUrl}
          name={playlist.name}
          owner={playlist.owner}
        />
      );
    });
  };

  useEffect(() => {
    if (!isLogin(token)) {
      navigate('/login');
    }
    fetchPlaylists();
    document.title = 'Playlists - Spotifie';
  }, []);

  return (
    <Container>
      <div>
        <h4>Playlists</h4>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {renderPlaylists()}
      </div>
    </Container>
  );
};
export default Playlists;
