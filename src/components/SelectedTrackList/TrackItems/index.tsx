import { MouseEventHandler } from 'react';
import { MdDelete } from 'react-icons/md';
import IconButton from '../../common/IconButton';

type Props = {
  artistName: string;
  trackTitle: string;
  handleDeleteTrack: () => void;
};

const TrackItems = ({ artistName, trackTitle, handleDeleteTrack }: Props) => {
  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = () => {
    handleDeleteTrack();
  };

  return (
    <div className=" p-2 hover:bg-zinc-800 hover:rounded-lg">
      <div className="flex items-center justify-between">
        <div className="w-3/4">
          <h5 className="truncate">{trackTitle}</h5>
          <p className="text-sm truncate">{artistName}</p>
        </div>
        <div className="w-1/4 flex justify-center">
          <IconButton
            icon={<MdDelete />}
            title="Remove from list"
            type="button"
            variant="remove"
            handleOnClick={handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};
export default TrackItems;
