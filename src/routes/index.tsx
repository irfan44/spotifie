import Callback from 'pages/Callback';
import CreatePlaylist from 'pages/CreatePlaylist';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import PlaylistDetail from 'pages/PlaylistDetail';
import Playlists from 'pages/Playlists';
import Search from 'pages/Search';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route
        path="/create-playlist"
        element={
          <PrivateRoute>
            <CreatePlaylist />
          </PrivateRoute>
        }
      />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />
      <Route
        path="/playlists"
        element={
          <PrivateRoute>
            <Playlists />
          </PrivateRoute>
        }
      />
      <Route
        path="/playlists/:playlistId"
        element={
          <PrivateRoute>
            <PlaylistDetail />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
export default AppRouter;
