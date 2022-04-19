import axios from 'axios';

type Images = {
  url: string;
};

type Response = {
  id: string;
  // eslint-disable-next-line camelcase
  display_name: string;
  images: Images[];
  href: string;
};

const getUserProfile = async (token: string) => {
  const endpointURL = '	https://api.spotify.com/v1/me';
  const onSuccess = (response: Response) => {
    const data = response;
    return {
      id: data.id,
      name: data.display_name,
      images: data.images[0].url,
      href: data.href,
    };
  };
  return axios
    .get(endpointURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => onSuccess(response.data));
};

export default getUserProfile;
