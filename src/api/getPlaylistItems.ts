import axios from 'axios';
import Tracks from '../types/tracks';
import convertTrackDuration from '../utils/convertTrackDuration';
import joinArtistName from '../utils/joinArtistName';

type Artist = {
  name: string;
};

type Image = {
  url: string;
};

type Data = {
  track: {
    id: string;
    uri: string;
    name: string;
    album: {
      images: Image[];
      name: string;
    };
    // eslint-disable-next-line camelcase
    duration_ms: number;
    artists: Artist[];
    // eslint-disable-next-line camelcase
    external_urls: {
      spotify: string;
    };
  };
};

type Response = {
  data: {
    tracks: {
      items: Data[];
    };
    name: string;
  };
};

const getPlaylistItems = async (playlistId: string, token: string) => {
  const endpointUrl = `https://api.spotify.com/v1/playlists/${playlistId}`;

  const onSuccess = (response: Response) => {
    const playlistData = response.data;
    const playlistItem = response.data.tracks.items;
    const tracks: Tracks[] = [];

    playlistItem.forEach((data) => {
      const artists: string[] = [];
      data.track.artists.forEach((artist) => {
        artists.push(artist.name);
      });

      const duration = convertTrackDuration(data.track.duration_ms);

      const artistName = joinArtistName(artists);

      tracks.push({
        uri: data.track.uri,
        imgUrl: data.track.album.images[1].url,
        trackTitle: data.track.name,
        duration,
        artistName,
        albumName: data.track.album.name,
      });
    });

    return { tracks, playlistName: playlistData.name };
  };
  return axios
    .get(endpointUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => onSuccess(response));
};

export default getPlaylistItems;
