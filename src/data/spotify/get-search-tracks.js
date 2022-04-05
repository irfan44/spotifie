import axios from "axios";

const getSearchTracks = async (query, token) => {
  const onFetchSuccess = (response) => {
    let searchResult = response.data.tracks.items;
    let tracks = [];
    searchResult.forEach((data) => {
      let artists = [];
      data.artists.forEach((artist) => {
        artists.push(artist.name);
      });
      tracks.push({
        id: data.id,
        uri: data.uri,
        imgUrl: data.album.images[1].url,
        trackTitle: data.name,
        artistName: artists,
        albumName: data.album.name,
        spotifyUrl: data.external_urls.spotify,
      });
    });

    return tracks;
  };

  return axios
    .get("https://api.spotify.com/v1/search", {
      params: { q: query, type: "track", access_token: token.token },
    })
    .then((response) => onFetchSuccess(response));
};

export default getSearchTracks;
