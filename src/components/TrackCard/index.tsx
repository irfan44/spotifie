import { MouseEventHandler } from 'react';
import { useAppSelector } from '../../redux/hooks';
import Button from '../common/Button';

type Tracks = {
  uri: string;
  imgUrl: string;
  trackTitle: string;
  artistName: string;
  albumName: string;
  duration?: string;
  handleSelectTrack?: () => void;
  handleDeleteTrack?: () => void;
};

const TrackCard = (props: Tracks) => {
  const {
    uri,
    imgUrl,
    trackTitle,
    artistName,
    albumName,
    duration,
    handleSelectTrack,
    handleDeleteTrack,
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

  const handleDeleteTrackFromSelectedList: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (handleDeleteTrack !== undefined) {
      handleDeleteTrack();
    }
  };

  const checkIfSelected = () => {
    const alreadySelected = selectedTracksUri.includes(uri);
    if (alreadySelected) {
      return true;
    }
    return false;
  };

  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg bg-zinc-900 p-4">
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
        <div>
          {checkIfSelected() ? (
            <Button
              title="Unselect"
              type="button"
              variant="secondary"
              handleOnClick={handleDeleteTrackFromSelectedList}
            />
          ) : (
            <Button
              title="Select"
              type="button"
              variant="primary"
              handleOnClick={handleAddTrackToSelectedList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
