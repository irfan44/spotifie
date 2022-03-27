import Button from "../../common/Button";
import Image from "../../common/Image";

const PlaylistTrack = ({ track }) => {
  return (
    <div className="grid grid-cols-[4fr_2fr_minmax(120px,1fr)] gap-x-2 p-2 hover:bg-slate-200 hover:rounded-lg">
      <div className="flex space-x-2">
        <Image
          title={track.name}
          imgUrl={track.album.images[0].url}
          width="48"
          height="48"
        />
        <div>
          <h2>{track.name}</h2>
          <p>{track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center">
        <h3>{track.album.name}</h3>
      </div>
      <div className="mx-auto flex items-center">
        <Button text="Select" />
      </div>
    </div>
  );
};
export default PlaylistTrack;
