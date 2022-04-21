import { useEffect, useState } from 'react';
import getRecommendedTracks from 'api/getRecommendedTracks';
import Container from 'components/layouts/Container';
import TrackCard from 'components/TrackCard';
import { useNavigate } from 'react-router-dom';
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

const Home = () => {
  const [tracks, setTracks] = useState<Tracks[]>([]);

  const displayName = useAppSelector((state) => state.userProfile.displayName);
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

  const fetchRecommendedTracks = async () => {
    if (token !== null) {
      try {
        const response = await getRecommendedTracks(token);
        setTracks(response);
      } catch (error) {
        const errorResponse = error as Error;
        handleFetchError(errorResponse);
      }
    }
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

  const renderTracks = () => {
    return tracks.map((track) => {
      return (
        <TrackCard
          key={track.uri}
          uri={track.uri}
          imgUrl={track.imgUrl}
          trackTitle={track.trackTitle}
          artistName={track.artistName}
          albumName={track.albumName}
          duration={track.duration}
          externalUrl={track.externalUrl}
          handleSelectTrack={() => addTrackToSelectedList(track)}
          handleRemoveTrack={() => removeTrackFromSelectedList(track)}
        />
      );
    });
  };

  useEffect(() => {
    if (!isLogin(token)) {
      navigate('/login');
    }
    fetchRecommendedTracks();
    document.title = 'Home - Spotifie';
  }, []);

  return (
    <Container>
      <div>
        <h4>Welcome, {displayName}!</h4>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {renderTracks()}
      </div>
    </Container>
  );
};
export default Home;
