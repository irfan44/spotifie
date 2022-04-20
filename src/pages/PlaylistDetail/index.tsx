import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getPlaylistItems from '../../api/getPlaylistItems';
import Container from '../../components/layouts/Container';
import TrackCard from '../../components/TrackCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  insertSelectedTrack,
  removeSelectedTrack,
} from '../../redux/slice/selectedTrackSlice';
import {
  insertSelectedTrackUri,
  removeSelectedTrackUri,
} from '../../redux/slice/selectedTrackUriSlice';
import Tracks from '../../types/tracks';

const PlaylistDetail = () => {
  const [playlistItems, setPlaylistItems] = useState<Tracks[]>([]);
  const [playlistTitle, setPlaylistTitle] = useState('');

  const token = useAppSelector((state) => state.token.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { playlistId } = params;

  const fetchPlaylistItems = async () => {
    if (playlistId !== undefined && token !== null) {
      try {
        const response = await getPlaylistItems(playlistId, token);
        setPlaylistItems(response.tracks);
        setPlaylistTitle(response.playlistName);
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
          handleSelectTrack={() => addTrackToSelectedList(item)}
          handleDeleteTrack={() => deleteTrackFromSelectedList(item)}
        />
      );
    });
  };

  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
    fetchPlaylistItems();
  }, []);

  return (
    <Container>
      <div>
        <h4>{`${playlistTitle} - Playlist Detail`}</h4>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {renderPlaylistItems()}
      </div>
    </Container>
  );
};
export default PlaylistDetail;
