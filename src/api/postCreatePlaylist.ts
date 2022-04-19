import axios from 'axios';

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
  userId: string,
  playlistData: Data,
  token: string
) => {
  const endpointURL = `https://api.spotify.com/v1/users/${userId}/playlists`;
  const bodyParams = {
    name: playlistData.name,
    description: playlistData.desc,
    public: false,
    collaborative: false,
  };

  const onSuccess = (response: Response) => {
    const { data } = response;
    return {
      playlistId: data.id,
      message: 'SUCCESS',
    };
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
