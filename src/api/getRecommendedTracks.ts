import axios from 'axios';
import Tracks from '../types/tracks';
import convertTrackDuration from '../utils/convertTrackDuration';
import getFullUrl from '../utils/getFullUrl';
import joinArtistName from '../utils/joinArtistName';

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
    tracks: Data[];
  };
};

const getRecommendedTracks = async (token: string) => {
  const endpointURL = `https://api.spotify.com/v1/recommendations`;
  const bodyParams = {
    market: 'ID',
    seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
    seed_genres: 'pop,electronic',
    seed_tracks: '0c6xIDDpzE81m2q797ordA',
    limit: 20,
  };

  const url = getFullUrl(endpointURL, bodyParams);

  const onSuccess = (response: Response) => {
    const result = response.data.tracks;
    const tracks: Tracks[] = [];

    result.forEach((data) => {
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
        externalUrl: data.external_urls.spotify,
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
export default getRecommendedTracks;
