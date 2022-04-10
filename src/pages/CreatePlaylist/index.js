import { useState } from "react";
import { useSelector } from "react-redux";
import CreatePlaylistForm from "../../components/CreatePlaylist/CreatePlaylistForm";
import SearchBar from "../../components/CreatePlaylist/SearchBar";
import TrackRow from "../../components/CreatePlaylist/TrackRow";
import getSearchTracks from "../../data/spotify/get-search-tracks";
import postAddItemsToPlaylist from "../../data/spotify/post-add-items-to-playlist";
import postCreatePlaylist from "../../data/spotify/post-create-playlist";
import checkLength from "../../utils/checkLength";

const CreatePlaylist = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [createPlaylistForm, setCreatePlaylistForm] = useState({
    name: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const token = useSelector((state) => state.token.token);
  const userId = useSelector((state) => state.userProfile.id);

  const handleSearchClick = () => {
    fetchSearchTracks();
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const fetchSearchTracks = async () => {
    try {
      let searchResult = await getSearchTracks(searchInput, token);
      fetchSearchTracksWithSelected(searchResult);
    } catch (error) {
      alert(error);
    }
  };

  const handleSelectTrack = (trackSelect) => {
    let URI = trackSelect.uri;
    if (selectedTracksUri.includes(URI)) {
      setSelectedTracksUri(selectedTracksUri.filter((item) => item !== URI));
    } else {
      setSelectedTracksUri([...selectedTracksUri, URI]);
    }
  };

  const filterTracks = () => {
    return tracks.filter((track) => selectedTracksUri.includes(track.uri));
  };

  const fetchSearchTracksWithSelected = (searchResult) => {
    const filteredTracks = filterTracks();
    const distincTracks = searchResult.filter(
      (track) => !selectedTracksUri.includes(track.uri)
    );
    setTracks([...filteredTracks, ...distincTracks]);
  };

  const checkInputs = () => {
    return checkLength(">=", createPlaylistForm.name, 10);
  };

  const setErrorFromInputs = () => {
    if (checkInputs()) {
      setErrorMessage("");
    } else {
      setErrorMessage("Enter 10 or more characters");
    }
  };

  const resetForm = () => {
    setCreatePlaylistForm({ name: "", description: "" });
    setSelectedTracksUri([]);
    setTracks([]);
  };

  const handleFormInputs = (event) => {
    const { name, value } = event.target;
    setCreatePlaylistForm({ ...createPlaylistForm, [name]: value });
    setErrorFromInputs();
  };

  const createPlaylist = async () => {
    try {
      let createPlaylist = await postCreatePlaylist(
        userId,
        createPlaylistForm,
        token
      );
      return createPlaylist.playlistID;
    } catch (error) {
      alert(error);
    }
  };

  const handleCreatePlaylistForm = async (event) => {
    event.preventDefault();
    if (checkInputs() && checkLength(">", selectedTracksUri, 0)) {
      try {
        let playlistId = await createPlaylist();
        handleAddItemsToPlaylist(playlistId);
        resetForm();
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please select at least 1 track or fill the form");
    }
  };

  const handleAddItemsToPlaylist = async (playlistId) => {
    try {
      let response = await postAddItemsToPlaylist(
        playlistId,
        token,
        selectedTracksUri
      );
      alert(response.message);
    } catch (error) {
      alert(error);
    }
  };

  const fetchTrackData = () => {
    return (
      tracks.length !== 0 &&
      tracks.map((track) => {
        return (
          <TrackRow
            key={track.uri}
            track={track}
            handleSelectTrack={() => handleSelectTrack(track)}
            select={false}
          />
        );
      })
    );
  };

  return (
    <>
      <div className="px-8 py-8">
        <div>
          <h2 className="font-bold text-xl mb-4">Create Playlist</h2>
          <CreatePlaylistForm
            handleSubmit={handleCreatePlaylistForm}
            handleOnChange={handleFormInputs}
            value={createPlaylistForm}
            errorMessage={errorMessage}
          />
          <SearchBar
            handleOnClick={handleSearchClick}
            handleOnChange={handleSearchInput}
          />
          <div className="space-y-2 mt-4">{fetchTrackData()}</div>
        </div>
      </div>
    </>
  );
};

export default CreatePlaylist;
