import "../../../styles/CreatePlaylist/TrackCard.css";
import Button from "../../common/Button";
import { useState } from "react";
import Image from "../../common/Image";
import React from "react";
import { MouseEventHandler } from "react";

type Tracks = {
  id: string;
  uri: string;
  imgUrl: string;
  trackTitle: string;
  artistName: string;
  albumName: string;
};

type Props = {
  track: Tracks;
  handleSelectTrack: () => void;
  select: boolean;
};

const TrackCard = ({ track, handleSelectTrack, select }: Props) => {
  const [selected, setSelected] = useState(select);

  const handleSelectButton: MouseEventHandler<HTMLButtonElement> = () => {
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
        <p>{track.artistName}</p>
        <p>{track.albumName}</p>
        <div className="track_button">
          <Button
            text={selected ? "Deselect" : "Select"}
            onClick={handleSelectButton}
            variant={selected ? "secondary" : "primary"}
            type={"button"}
          />
        </div>
      </div>
    </div>
  );
};
export default TrackCard;
