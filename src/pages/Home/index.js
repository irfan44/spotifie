import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/reducer/token-reducer";
import Login from "../Login";
import IsLogin from "../../utils/isLogin";
import { useHistory } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.token.token);

  const fetchUser = () => {
    let url = window.location.hash.substring(1);
    let searchParams = new URLSearchParams(url);
    let accessToken = searchParams.get("access_token");
    dispatch(setToken(accessToken));
  };

  useEffect(() => {
    fetchUser();
  });

  useEffect(() => {
    if (IsLogin(token)) {
      history.push("create-playlist");
    }
  }, [token, history]);

  return (
    <div>
      <div>
        <Login />
      </div>
    </div>
  );
};
export default Home;
