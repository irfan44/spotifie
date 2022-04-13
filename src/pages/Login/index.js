import "../../styles/Login/Login.css";

const Login = () => {
  let urlParams = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    response_type: "token",
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    scope: "playlist-modify-private",
    state: "BOQ9vL6dvX2CUlmk",
  };

  const authUrl = `https://accounts.spotify.com/authorize?response_type=${urlParams.response_type}&client_id=${urlParams.client_id}&scope=${urlParams.scope}&redirect_uri=${urlParams.redirect_uri}&state=${urlParams.state}`;

  return (
    <>
      <div className="login_page">
        <a className="login_button" href={authUrl}>
          Login to Spotify
        </a>
      </div>
    </>
  );
};
export default Login;
