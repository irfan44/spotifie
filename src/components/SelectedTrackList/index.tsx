import { MouseEventHandler } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { removeSelectedTrack } from '../../services/slice/selectedTrackSlice';
import { removeSelectedTrackUri } from '../../services/slice/selectedTrackUriSlice';
import Tracks from '../../types/tracks';
import Button from '../common/Button';
import TrackItems from './TrackItems';

const SelectedTrackList = () => {
  const selectedTrack = useAppSelector((state) => state.selectedTrack.value);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isCreatePlaylist = location.pathname === '/create-playlist';
  const isLogin = location.pathname === '/login';

  const isShowOnPage = () => {
    if (isCreatePlaylist || isLogin) {
      return false;
    }
    return true;
  };

  const handleCreatePlaylistButton: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    navigate('/create-playlist');
  };

  const deleteTrackFromSelectedList = (track: Tracks) => {
    const selectedUri = track.uri;
    dispatch(removeSelectedTrack(track));
    dispatch(removeSelectedTrackUri(selectedUri));
  };

  const renderTrackItems = () => {
    return selectedTrack.map((track) => {
      return (
        <TrackItems
          key={track.uri}
          trackTitle={track.trackTitle}
          artistName={track.artistName}
          handleDeleteTrack={() => deleteTrackFromSelectedList(track)}
        />
      );
    });
  };

  return (
    <div>
      {isShowOnPage() && (
        <div className="w-56 lg:w-64 mt-6 lg:mt-20 pl-4 pb-4">
          <div className=" space-y-4 flex flex-col h-96">
            <div className="h-fit">
              <h4>Track List</h4>
            </div>
            <div className="flex-1 bg-zinc-900 rounded-lg overflow-auto scrollbar-hide">
              {renderTrackItems()}
            </div>
            <Button
              title="Add to new playlist"
              primary
              type="button"
              handleOnClick={handleCreatePlaylistButton}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default SelectedTrackList;
