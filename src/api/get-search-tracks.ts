import axios from "axios";

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

type Tracks = {
  id: string;
  uri: string;
  imgUrl: string;
  trackTitle: string;
  artistName: string;
  albumName: string;
};

type Data = {
  id: string;
  uri: string;
  name: string;
  album: {
    images: Image[];
    name: string;
  };
  artists: Artist[];
};

type Response = {
  data: {
    tracks: {
      items: Data[];
    };
  };
};

const getSearchTracks = async (query: string, token: Token) => {
  const onFetchSuccess = (response: Response) => {
    let searchResult = response.data.tracks.items;
    let tracks: Tracks[] = [];
    searchResult.forEach((data) => {
      let artists: string[] = [];
      data.artists.forEach((artist) => {
        artists.push(artist.name);
      });
      let artistName = artists.join(", ");

      tracks.push({
        id: data.id,
        uri: data.uri,
        imgUrl: data.album.images[1].url,
        trackTitle: data.name,
        artistName: artistName,
        albumName: data.album.name,
      });
    });

    return tracks;
  };

  return axios
    .get("https://api.spotify.com/v1/search", {
      params: { q: query, type: "track", access_token: token },
    })
    .then((response) => onFetchSuccess(response));
};

export default getSearchTracks;
