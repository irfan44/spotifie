import { useState, useEffect } from "react";
import SearchBar from "../../components/Playlist/SearchBar";
import SelectTrack from "../../components/Playlist/SelectTrack";
import getSearchTracks from "../../data/spotify/search-api-call";

const Playlist = () => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const filterTracks = () => {
    return tracks.filter((track) => selectedTracksUri.includes(track.uri));
  };
  const handleSearchClick = () => {
    fetchSearchTracks();
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectTrack = (trackSelect) => {
    let uri = trackSelect.uri;
    if (selectedTracksUri.includes(uri)) {
      setSelectedTracksUri(selectedTracksUri.filter((item) => item !== uri));
    } else {
      setSelectedTracksUri([...selectedTracksUri, uri]);
    }
  };

  const fetchSearchTracksWithSelected = (searchTracks) => {
    const filteredTracks = filterTracks();
    const distincTracks = searchTracks.filter(
      (track) => !selectedTracksUri.includes(track.uri)
    );
    setTracks([...filteredTracks, ...distincTracks]);
  };

  const fetchSearchTracks = async () => {
    try {
      let response = await getSearchTracks(searchInput, token);
      fetchSearchTracksWithSelected(response);
    } catch (error) {
      alert(error);
    }
  };

  const fetchUser = () => {
    let url = window.location.hash.substring(1);
    let searchParams = new URLSearchParams(url);
    let accessToken = searchParams.get("access_token");
    setToken(accessToken);
    accessToken !== null && setAuth(true);
  };

  const fetchTrackData = () => {
    return (
      tracks.length !== 0 &&
      tracks.map((track) => {
        return (
          <SelectTrack
            key={track.uri}
            track={track}
            handleSelectTrack={() => handleSelectTrack(track)}
            select={false}
          />
        ); //row layout
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
        {!auth && (
          <div className="flex justify-center">
            <a
              className="py-2 px-5 bg-green-500 text-center rounded-full"
              href={authUrl}
            >
              Login to Spotify
            </a>
          </div>
        )}
        {auth && (
          <div>
            <h2 className="font-bold  text-xl mb-4">Playlist</h2>
            <SearchBar
              handleOnClick={handleSearchClick}
              handleOnChange={handleSearchInput}
            />
            <div className="space-y-2 mt-4">{fetchTrackData()}</div>
          </div>
        )}
      </div>
    </>
  );
};
export default Playlist;
