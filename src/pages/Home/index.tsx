import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getRecommendedTracks from '../../api/getRecommendedTracks';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import {
  insertSelectedTrack,
  removeSelectedTrack,
} from '../../services/slice/selectedTrackSlice';
import {
  insertSelectedTrackUri,
  removeSelectedTrackUri,
} from '../../services/slice/selectedTrackUriSlice';
import TrackCard from '../../components/TrackCard';
import Tracks from '../../types/tracks';
import Container from '../../components/layouts/Container';

const Home = () => {
  const [tracks, setTracks] = useState<Tracks[]>([]);

  const displayName = useAppSelector((state) => state.userProfile.displayName);
  const token = useAppSelector((state) => state.token.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchRecommendedTracks = async () => {
    if (token !== null) {
      try {
        const response = await getRecommendedTracks(token);
        setTracks(response);
      } catch (error) {
        alert(error);
      }
    }
  };

  const addTrackToSelectedList = (selectedTrack: Tracks) => {
    const selectedUri = selectedTrack.uri;
    dispatch(insertSelectedTrackUri(selectedUri));
    dispatch(insertSelectedTrack(selectedTrack));
  };

  const deleteTrackFromSelectedList = (selectedTrack: Tracks) => {
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
          handleSelectTrack={() => addTrackToSelectedList(track)}
          handleDeleteTrack={() => deleteTrackFromSelectedList(track)}
        />
      );
    });
  };

  useEffect(() => {
    if (token === null) {
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
