import axios from 'axios';

type Playlist = {
  playlistId: string;
  name: string;
  imgUrl?: string;
  imgAlt?: string;
  owner: string;
};

type Images = {
  url: string;
};

type Data = {
  id: string;
  images: Images[];
  name: string;
  owner: {
    // eslint-disable-next-line camelcase
    display_name: string;
  };
};

type Response = {
  data: {
    items: Data[];
  };
};

const getUserPlaylists = async (token: string) => {
  const checkImage = (images: Images[]) => {
    if (images.length === 0) {
      return '/images/default-playlist-image.png';
    }
    return images[0].url;
  };

  const onSuccess = (response: Response) => {
    const playlistItem = response.data.items;
    const playlist: Playlist[] = [];

    playlistItem.forEach((item) => {
      const image = checkImage(item.images);

      if (item.name !== '') {
        playlist.push({
          playlistId: item.id,
          name: item.name,
          imgUrl: image,
          imgAlt: item.name,
          owner: item.owner.display_name,
        });
      }
    });

    return playlist;
  };

  return axios
    .get(`https://api.spotify.com/v1/me/playlists`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => onSuccess(response));
};
export default getUserPlaylists;
