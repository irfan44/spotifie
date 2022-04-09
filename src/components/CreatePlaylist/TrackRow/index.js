import Button from "../../common/Button";
import { useState } from "react";

const TrackRow = ({ track, handleSelectTrack, select }) => {
  const [selected, setSelected] = useState(select);

  const handleSelectButton = () => {
    setSelected(!selected);
    handleSelectTrack();
  };

  return (
    <div className="grid grid-cols-[4fr_2fr_minmax(120px,1fr)] gap-x-2 p-2 hover:bg-zinc-800 hover:rounded-lg">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-lg"
          src={track.imgUrl}
          alt={track.trackTitle}
          width="45"
          height="45"
        />
        <div>
          <h2>{track.trackTitle}</h2>
          <p>{track.artistName.join(", ")}</p>
        </div>
      </div>
      <div className="flex items-center">
        <h3>{track.albumName}</h3>
      </div>
      <div className="mx-auto flex items-center">
        <Button
          text={selected ? "Deselect" : "Select"}
          onClick={handleSelectButton}
          variant={selected ? "secondary" : "primary"}
        />
      </div>
    </div>
  );
};
export default TrackRow;
