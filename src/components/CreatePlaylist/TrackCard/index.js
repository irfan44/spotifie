import "./index.css";
import Button from "../../common/Button";
import { useState } from "react";
import Image from "../../common/Image";

const TrackCard = ({ track, handleSelectTrack, select }) => {
  const [selected, setSelected] = useState(select);

  const handleSelectButton = () => {
    setSelected(!selected);
    handleSelectTrack();
  };

  return (
    <div className="track_card">
      <Image
        src={track.imgUrl}
        alt={track.trackTitle}
        width="150"
        height="150"
      />
      <div className="track_info">
        <h3>{track.trackTitle}</h3>
        <p>{track.artistName.join(", ")}</p>
        <p>{track.albumName}</p>
        <div className="track_button">
          <Button
            text={selected ? "Deselect" : "Select"}
            onClick={handleSelectButton}
            variant={selected ? "secondary" : "primary"}
          />
        </div>
      </div>
    </div>
  );
};
export default TrackCard;
