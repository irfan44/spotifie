import axios from "axios";

const postCreatePlaylist = async (userID, data, token) => {
  const endpointURL = `https://api.spotify.com/v1/users/${userID}/playlists`;
  const bodyParams = {
    name: data.name,
    description: data.description,
    public: false,
    collaborative: false,
  };
  const onPostSuccess = (response) => {
    const data = response.data;
    return {
      playlistID: data.id,
      uri: data.uri,
    };
  };
  return axios
    .post(endpointURL, bodyParams, {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
    .then((response) => onPostSuccess(response));
};

export default postCreatePlaylist;
