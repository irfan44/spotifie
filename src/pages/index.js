import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "../router";

const Main = () => {
  return (
    <div>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default Main;
