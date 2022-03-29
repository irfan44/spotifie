import Image from "../../common/Image";
import Button from "../../common/Button";

const TrackCard = ({ track }) => {
  return (
    <div className="bg-zinc-800 rounded-lg flex flex-col">
      <div>
        <img
          className="rounded-t-lg"
          src={track.imgUrl}
          alt={track.trackTitle}
          width="100%"
        />
      </div>
      <div className="py-4 px-2 space-y-2 grow">
        <h4 className="font-bold text-base">{track.trackTitle}</h4>
        <p className="text-sm">{track.albumName}</p>
        <p className="text-sm">{track.artistName.join(", ")}</p>
      </div>
      <div className="px-2 py-4">
        <Button text="Select" />
      </div>
    </div>
  );
};

export default TrackCard;
