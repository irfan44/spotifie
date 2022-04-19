import { Link } from 'react-router-dom';

type Playlist = {
  playlistId: string;
  imgAlt?: string;
  imgUrl?: string;
  name: string;
  owner: string;
};

const PlaylistsCard = ({
  playlistId,
  imgAlt,
  imgUrl,
  name,
  owner,
}: Playlist) => {
  return (
    <Link to={`/playlists/${playlistId}`}>
      <div className="space-y-2">
        <div>
          <img className="rounded-lg" src={imgUrl} alt={imgAlt} />
        </div>
        <div>
          <h5 className="truncate">{name}</h5>
          <p className="truncate">{owner}</p>
        </div>
      </div>
    </Link>
  );
};
export default PlaylistsCard;
