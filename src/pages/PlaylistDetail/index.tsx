import { MouseEventHandler, useEffect, useState } from 'react';
import getPlaylistItems from 'api/getPlaylistItems';
import IconButton from 'components/common/IconButton';
import Container from 'components/layouts/Container';
import TrackCard from 'components/TrackCard';
import { FaSpotify } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { openModal } from 'redux/slice/modalSlice';
import {
  insertSelectedTrack,
  removeSelectedTrack,
} from 'redux/slice/selectedTrackSlice';
import {
  insertSelectedTrackUri,
  removeSelectedTrackUri,
} from 'redux/slice/selectedTrackUriSlice';
import { resetToken } from 'redux/slice/tokenSlice';
import { resetUserProfile } from 'redux/slice/userProfileSlice';
import Error from 'types/error';
import Tracks from 'types/tracks';
import isLogin from 'utils/isLogin';

const PlaylistDetail = () => {
  const [playlistItems, setPlaylistItems] = useState<Tracks[]>([]);
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [playlistUrl, setPlaylistUrl] = useState('');

  const token = useAppSelector((state) => state.token.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { playlistId } = params;

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

  const fetchPlaylistItems = async () => {
    if (playlistId !== undefined && token !== null) {
      try {
        const response = await getPlaylistItems(playlistId, token);
        setPlaylistItems(response.tracks);
        setPlaylistTitle(response.playlistName);
        setPlaylistUrl(response.externalUrl);
      } catch (error) {
        const errorResponse = error as Error;
        handleFetchError(errorResponse);
      }
    }
  };

  const handleExternalUrl: MouseEventHandler<HTMLButtonElement> = () => {
    window.open(playlistUrl, '_blank');
  };

  const addTrackToSelectedList = (selectedTrack: Tracks) => {
    const selectedUri = selectedTrack.uri;
    dispatch(insertSelectedTrackUri(selectedUri));
    dispatch(insertSelectedTrack(selectedTrack));
  };

  const removeTrackFromSelectedList = (selectedTrack: Tracks) => {
    const selectedUri = selectedTrack.uri;
    dispatch(removeSelectedTrackUri(selectedUri));
    dispatch(removeSelectedTrack(selectedTrack));
  };

  const renderPlaylistItems = () => {
    return playlistItems.map((item) => {
      return (
        <TrackCard
          key={item.uri}
          uri={item.uri}
          imgUrl={item.imgUrl}
          trackTitle={item.trackTitle}
          artistName={item.artistName}
          albumName={item.albumName}
          duration={item.duration}
          externalUrl={item.externalUrl}
          handleSelectTrack={() => addTrackToSelectedList(item)}
          handleRemoveTrack={() => removeTrackFromSelectedList(item)}
        />
      );
    });
  };

  useEffect(() => {
    if (!isLogin(token)) {
      navigate('/login');
    }
    fetchPlaylistItems();
    document.title = `Playlist Detail - Spotifie`;
  }, []);

  return (
    <Container>
      <div className="flex items-center space-x-2">
        <h4>{`${playlistTitle} - Playlist Detail`}</h4>
        <IconButton
          icon={<FaSpotify />}
          title="Open playlist in Spotify"
          type="button"
          variant="add"
          handleOnClick={handleExternalUrl}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {renderPlaylistItems()}
      </div>
    </Container>
  );
};
export default PlaylistDetail;
