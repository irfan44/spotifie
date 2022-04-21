import { Routes, Route } from 'react-router-dom';
import Callback from '../pages/Callback';
import CreatePlaylist from '../pages/CreatePlaylist';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PlaylistDetail from '../pages/PlaylistDetail';
import Playlists from '../pages/Playlists';
import Search from '../pages/Search';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/create-playlist" element={<CreatePlaylist />} />
      <Route path="/search" element={<Search />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlists/:playlistId" element={<PlaylistDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default AppRouter;
