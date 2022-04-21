import { MouseEventHandler } from 'react';
import { FaSpotify } from 'react-icons/fa';
import IconButton from '../common/IconButton';
import { useAppSelector } from '../../redux/hooks';
import Button from '../common/Button';

type Tracks = {
  uri: string;
  imgUrl: string;
  trackTitle: string;
  artistName: string;
  albumName: string;
  duration: string;
  externalUrl: string;
  handleSelectTrack?: () => void;
  handleRemoveTrack?: () => void;
};

const TrackCard = (props: Tracks) => {
  const {
    uri,
    imgUrl,
    trackTitle,
    artistName,
    albumName,
    duration,
    externalUrl,
    handleSelectTrack,
    handleRemoveTrack,
  } = props;

  const selectedTracksUri = useAppSelector(
    (state) => state.selectedTrackUri.value
  );

  const handleAddTrackToSelectedList: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (handleSelectTrack !== undefined) {
      handleSelectTrack();
    }
  };

  const handleRemoveTrackFromSelectedList: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (handleRemoveTrack !== undefined) {
      handleRemoveTrack();
    }
  };

  const handleExternalUrl: MouseEventHandler<HTMLButtonElement> = () => {
    window.open(externalUrl, '_blank');
  };

  const checkIfSelected = () => {
    const alreadySelected = selectedTracksUri.includes(uri);
    if (alreadySelected) {
      return true;
    }
    return false;
  };

  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg bg-zinc-900 p-4 hover:bg-zinc-800">
      <div className="my-auto">
        <img className="rounded-lg" src={imgUrl} alt={trackTitle} />
      </div>
      <div className="space-y-2">
        <div>
          <h5 className="truncate">{trackTitle}</h5>
          <p className="truncate">{artistName}</p>
        </div>
        <div>
          <p className="truncate">{albumName}</p>
          <p>{duration}</p>
        </div>
        <div className="flex items-center space-x-2">
          {checkIfSelected() ? (
            <Button
              title="Remove"
              type="button"
              variant="secondary"
              handleOnClick={handleRemoveTrackFromSelectedList}
            />
          ) : (
            <Button
              title="Select"
              type="button"
              variant="primary"
              handleOnClick={handleAddTrackToSelectedList}
            />
          )}
          <IconButton
            icon={<FaSpotify />}
            title="Open track in Spotify"
            type="button"
            variant="add"
            handleOnClick={handleExternalUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
