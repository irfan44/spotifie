import axios from 'axios';
import Tracks from '../types/tracks';
import convertTrackDuration from '../utils/convertTrackDuration';
import getFullUrl from '../utils/getFullUrl';
import joinArtistName from '../utils/joinArtistName';

type Token = {
  token: string;
};

type Image = {
  width: number;
  url: string;
};

type Artist = {
  name: string;
};

type Data = {
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

type Response = {
  data: {
    tracks: {
      items: Data[];
    };
  };
};

const getSearchTracks = async (query: string, token: Token) => {
  const endpointURL = `https://api.spotify.com/v1/search`;
  const bodyParams = {
    q: query,
    type: 'track',
  };
  const url = getFullUrl(endpointURL, bodyParams);

  const onSuccess = (response: Response) => {
    const searchResult = response.data.tracks.items;
    const tracks: Tracks[] = [];

    searchResult.forEach((data) => {
      const artists: string[] = [];
      data.artists.forEach((artist) => {
        artists.push(artist.name);
      });

      const duration = convertTrackDuration(data.duration_ms);

      const artistName = joinArtistName(artists);

      tracks.push({
        uri: data.uri,
        imgUrl: data.album.images[1].url,
        trackTitle: data.name,
        duration,
        artistName,
        albumName: data.album.name,
      });
    });

    return tracks;
  };

  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => onSuccess(response));
};

export default getSearchTracks;
