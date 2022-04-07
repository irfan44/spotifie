import axios from "axios";

const getUserData = async (token) => {
  const endpointURL = "	https://api.spotify.com/v1/me";
  const onFetchSuccess = (response) => {
    const data = response.data;
    return {
      id: data.id,
      uri: data.uri,
      name: data.display_name,
    };
  };
  return axios
    .get(endpointURL, { params: { access_token: token } })
    .then((response) => onFetchSuccess(response));
};

export default getUserData;
