import axios from 'axios';
// import getFullUrl from '../utils/getFullUrl';

type Response = {
  data: {
    // eslint-disable-next-line camelcase
    playlist_id: string;
    message: string;
  };
};

const postAddItemsToPlaylist = async (
  playlistId: string,
  selectedTracksUri: string[],
  token: string
) => {
  const endpointURL = `	https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const bodyParams = {
    uris: selectedTracksUri,
  };

  // const url = getFullUrl(endpointURL, bodyParams);

  const onSuccess = (response: Response) => {
    return {
      playlist_id: response.data.playlist_id,
      message: 'Successfully added tracks to playlist',
    };
  };
  return axios
    .post(endpointURL, bodyParams, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(onSuccess);
};
export default postAddItemsToPlaylist;
