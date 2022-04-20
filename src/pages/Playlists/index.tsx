import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserPlaylists from '../../api/getUserPlaylists';
import Container from '../../components/layouts/Container';
import PlaylistsCard from '../../components/Playlists/PlaylistsCard';
import { useAppSelector } from '../../redux/hooks';

type Playlist = {
  playlistId: string;
  name: string;
  imgUrl?: string;
  imgAlt?: string;
  owner: string;
};

const Playlists = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const token = useAppSelector((state) => state.token.value);

  const navigate = useNavigate();

  const fetchPlaylists = async () => {
    if (token !== null) {
      try {
        const response = await getUserPlaylists(token);
        setPlaylists(response);
      } catch (error) {
        alert(error);
      }
    }
  };

  const renderPlaylists = () => {
    return playlists.map((playlist) => {
      return (
        <PlaylistsCard
          key={playlist.playlistId}
          playlistId={playlist.playlistId}
          imgAlt={playlist.imgAlt}
          imgUrl={playlist.imgUrl}
          name={playlist.name}
          owner={playlist.owner}
        />
      );
    });
  };

  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
    fetchPlaylists();
    document.title = 'Playlists - Spotifie';
  }, []);

  return (
    <Container>
      <div>
        <h4>Playlists</h4>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {renderPlaylists()}
      </div>
    </Container>
  );
};
export default Playlists;
