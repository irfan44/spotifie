import { ChangeEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { openModal } from 'redux/slice/modalSlice';
import Error from 'types/error';
import { resetToken } from 'redux/slice/tokenSlice';
import { resetUserProfile } from 'redux/slice/userProfileSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import postCreatePlaylist from '../../api/postCreatePlaylist';
import CreateForm from '../../components/CreatePlaylist/CreatePlaylistForm';
import TrackCard from '../../components/TrackCard';
import {
  clearSelectedTrack,
  removeSelectedTrack,
} from '../../redux/slice/selectedTrackSlice';
import {
  clearSelectedTrackUri,
  removeSelectedTrackUri,
} from '../../redux/slice/selectedTrackUriSlice';
import Tracks from '../../types/tracks';
import postAddItemsToPlaylist from '../../api/postAddItemToPlaylist';
import Container from '../../components/layouts/Container';

const CreatePlaylist = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [isError, setIsError] = useState(false);

  const selectedTrack = useAppSelector((state) => state.selectedTrack.value);
  const selectedTrackUri = useAppSelector(
    (state) => state.selectedTrackUri.value
  );
  const token = useAppSelector((state) => state.token.value);
  const userId = useAppSelector((state) => state.userProfile.id);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const checkNameLength = () => {
    if (name.length > 10) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

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

  const handleNameInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
    checkNameLength();
  };

  const handleDescInput: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setDesc(event.target.value);
  };

  const handleAddItemsToPlaylist = async (id: string) => {
    if (id !== '' && token !== null) {
      try {
        await postAddItemsToPlaylist(id, selectedTrackUri, token);
        dispatch(clearSelectedTrackUri());
        dispatch(clearSelectedTrack());
      } catch (error) {
        const errorResponse = error as Error;
        handleFetchError(errorResponse);
      }
    } else {
      dispatch(
        openModal({ status: 'error', message: 'Cannot find playlist ID' })
      );
    }
  };

  const handleCreatePlaylist = async () => {
    if (name.length > 10) {
      if (selectedTrackUri.length === 0) {
        const data = { name, desc };
        if (userId !== null && token !== null) {
          try {
            const response = await postCreatePlaylist(userId, data, token);
            await handleAddItemsToPlaylist(response.playlistId);
            dispatch(
              openModal({
                status: 'success',
                message: 'Playlist successfully created',
              })
            );
          } catch (error) {
            const errorResponse = error as Error;
            handleFetchError(errorResponse);
          }
        } else {
          dispatch(
            openModal({ status: 'error', message: 'Cannot find user ID' })
          );
        }
      } else {
        dispatch(
          openModal({
            status: 'error',
            message: 'Please select at least one track',
          })
        );
      }
    } else {
      setIsError(true);
    }
  };

  const resetForm = () => {
    setName('');
    setDesc('');
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    handleCreatePlaylist();
    resetForm();
  };

  const deleteTrackFromSelectedList = (track: Tracks) => {
    const selectedUri = track.uri;
    dispatch(removeSelectedTrack(track));
    dispatch(removeSelectedTrackUri(selectedUri));
  };

  const renderTracks = () => {
    return selectedTrack.map((track) => {
      return (
        <TrackCard
          key={track.uri}
          uri={track.uri}
          imgUrl={track.imgUrl}
          trackTitle={track.trackTitle}
          artistName={track.artistName}
          albumName={track.albumName}
          duration={track.duration}
          handleDeleteTrack={() => deleteTrackFromSelectedList(track)}
        />
      );
    });
  };

  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
    document.title = 'Create Playlist - Spotifie';
  });

  return (
    <Container>
      <div>
        <h4>Create Playlist</h4>
      </div>
      <div className="space-y-2">
        <div className="w-2/3">
          <CreateForm
            name={name}
            desc={desc}
            handleInputChange={handleNameInput}
            handleTextAreaChange={handleDescInput}
            handleOnSubmit={handleFormSubmit}
            handleError={isError}
          />
        </div>
      </div>
      <div>
        <h4>Selected Tracks</h4>
      </div>
      <div className="grid grid-cols-1 gap-4 overflow-auto scrollbar-hide md:grid-cols-2">
        {renderTracks()}
      </div>
    </Container>
  );
};
export default CreatePlaylist;
