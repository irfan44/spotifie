import { MouseEventHandler } from 'react';
import Button from 'components/common/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { removeSelectedTrack } from 'redux/slice/selectedTrackSlice';
import { removeSelectedTrackUri } from 'redux/slice/selectedTrackUriSlice';
import Tracks from 'types/tracks';
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

  const removeTrackFromSelectedList = (track: Tracks) => {
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
          handleRemoveTrack={() => removeTrackFromSelectedList(track)}
        />
      );
    });
  };

  return (
    <div>
      {isShowOnPage() && (
        <div className="mt-6 w-64 pl-4 pb-4 lg:mt-20">
          <div className="flex h-[calc(100vh_-_5.85rem)] flex-col space-y-4 lg:h-[calc(100vh_-_6rem)]">
            <div className="h-fit">
              <h4>Selected Tracks</h4>
            </div>
            <div className="flex-1 overflow-auto rounded-lg bg-zinc-900 scrollbar-hide">
              {renderTrackItems()}
            </div>
            <Button
              title="Add to new playlist"
              type="button"
              variant="primary"
              handleOnClick={handleCreatePlaylistButton}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default SelectedTrackList;
