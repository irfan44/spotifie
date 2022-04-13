import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setToken } from "../../redux/reducer/token-reducer";
import { setUserProfile } from "../../redux/reducer/user-profile-reducer";
import Login from "../Login";
import IsLogin from "../../utils/isLogin";
import getUserData from "../../api/get-user-data";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.token.token);

  const fetchUser = () => {
    let url = window.location.hash.substring(1);
    let searchParams = new URLSearchParams(url);
    let accessToken = searchParams.get("access_token");
    dispatch(setToken(accessToken));
    accessToken !== null && fetchUserProfile(accessToken);
  };

  const fetchUserProfile = async (accessToken) => {
    try {
      let data = await getUserData(accessToken);
      dispatch(
        setUserProfile({
          id: data.id,
          displayName: data.name,
        })
      );
    } catch (error) {
      alert(error);
    }
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
