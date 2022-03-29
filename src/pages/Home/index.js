import { useState, useEffect } from "react";
import SearchBar from "../../components/Home/SearchBar";
import TrackCard from "../../components/Home/TrackCard";
import getSearchTracks from "../../data/spotify/search-api-call";

const Home = () => {
  const [token, setToken] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchClick = () => {
    fetchSearchTracks();
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const fetchSearchTracks = async () => {
    try {
      let response = await getSearchTracks(searchInput, token);
      setTracks(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = () => {
    let url = window.location.hash.substring(1);
    let searchParams = new URLSearchParams(url);
    let accessToken = searchParams.get("access_token");
    setToken(accessToken);
  };

  const fetchTrackData = () => {
    return (
      tracks.length !== 0 &&
      tracks.map((track) => {
        return <TrackCard key={track.id} track={track} />;
      })
    );
  };

  let urlParams = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    response_type: "token",
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    scope: "playlist-modify-private",
    state: "BOQ9vL6dvX2CUlmk",
  };

  const authUrl = `https://accounts.spotify.com/authorize?response_type=${urlParams.response_type}&client_id=${urlParams.client_id}&scope=${urlParams.scope}&redirect_uri=${urlParams.redirect_uri}&state=${urlParams.state}`;

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="px-8 py-8">
        <a href={authUrl}>Login</a>
        <SearchBar
          handleOnClick={handleSearchClick}
          handleOnChange={handleSearchInput}
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {fetchTrackData()}
        </div>
      </div>
    </>
  );
};
export default Home;
