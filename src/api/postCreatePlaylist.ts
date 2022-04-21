import axios from 'axios';
import postAddItemsToPlaylist from './postAddItemToPlaylist';

type Data = {
  name: string;
  desc: string;
};

type Response = {
  data: {
    id: string;
  };
};

const postCreatePlaylist = async (
  playlistData: Data,
  selectedTracksUri: string[],
  token: string,
  userId: string
) => {
  const endpointURL = `https://api.spotify.com/v1/users/${userId}/playlists`;
  const bodyParams = {
    name: playlistData.name,
    description: playlistData.desc,
    public: false,
    collaborative: false,
  };

  const onSuccess = async (response: Response) => {
    const { data } = response;
    await postAddItemsToPlaylist(data.id, selectedTracksUri, token);
  };

  return axios
    .post(endpointURL, bodyParams, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => onSuccess(response));
};

export default postCreatePlaylist;
