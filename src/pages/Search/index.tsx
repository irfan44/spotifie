import { ChangeEventHandler, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { openModal } from 'redux/slice/modalSlice';
import { resetToken } from 'redux/slice/tokenSlice';
import { resetUserProfile } from 'redux/slice/userProfileSlice';
import Error from 'types/error';
import isLogin from 'utils/isLogin';
import getSearchTracks from '../../api/getSearchTracks';
import Container from '../../components/layouts/Container';
import SearchBar from '../../components/Search/SearchBar';
import TrackCard from '../../components/TrackCard';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {
  insertSelectedTrack,
  removeSelectedTrack,
} from '../../redux/slice/selectedTrackSlice';
import {
  insertSelectedTrackUri,
  removeSelectedTrackUri,
} from '../../redux/slice/selectedTrackUriSlice';
import Tracks from '../../types/tracks';

const Search = () => {
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tracks, setTracks] = useState<Tracks[]>([]);

  const token = useAppSelector((state) => state.token.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFetchError = (error: Error) => {
    const errorMessage = error.response.data.error.message;

    switch (error.response.status) {
      case 401:
        dispatch(
          openModal({
            status: 'error',
            message: errorMessage,
          })
        );
        dispatch(resetToken());
        dispatch(resetUserProfile());
        navigate('/login');
        break;
      case 403:
        dispatch(
          openModal({
            status: 'error',
            message: errorMessage,
          })
        );
        dispatch(resetToken());
        dispatch(resetUserProfile());
        navigate('/login');
        break;
      default:
        dispatch(openModal('error'));
        break;
    }
  };

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value);
  };

  const fetchSearchTracks = async () => {
    if (token !== null && searchQuery !== '') {
      try {
        const response = await getSearchTracks(searchQuery, token);
        setTracks(response);
        setIsError(false);
      } catch (error) {
        const errorResponse = error as Error;
        handleFetchError(errorResponse);
      }
    } else {
      setIsError(true);
    }
  };

  const handleSearchSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetchSearchTracks();
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
    if (!isLogin(token)) {
      navigate('/login');
    }
    document.title = 'Search - Spotifie';
  });

  return (
    <Container>
      <div>
        <h4>Search</h4>
      </div>
      <div>
        <SearchBar
          handleError={isError}
          value={searchQuery}
          handleOnChange={handleSearchInput}
          handleOnSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {renderTracks()}
      </div>
    </Container>
  );
};
export default Search;
