import axios from "axios";

const postAddItemsToPlaylist = async (playlistID, token, selectedTracksUri) => {
  const endpointURL = `	https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
  const bodyParams = {
    uris: selectedTracksUri,
    // uris: [selectedTracksUri],
  };
  const onPostSuccess = (response) => {
    return {
      playlist_id: response,
    };
  };
  return axios
    .post(endpointURL, bodyParams, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(onPostSuccess);
};
export default postAddItemsToPlaylist;
