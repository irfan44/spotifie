// create approuter from react-router-dom
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreatePlaylist from "../pages/CreatePlaylist";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <PrivateRoute path="/create-playlist" redirect="/">
        <CreatePlaylist />
      </PrivateRoute>
      <Route path="*">
        <h2>404</h2>
      </Route>
    </Switch>
  );
};

export default AppRouter;
