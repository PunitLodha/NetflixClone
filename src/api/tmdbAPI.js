import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const baseUrl = 'https://api.themoviedb.org/3/';

export const getConfiguration = async () => {
  const configuration = await axios
    .get(`${baseUrl}configuration?api_key=${API_KEY}`)
    .then(data => data);
  const imageConfig = configuration.data.images;
  return imageConfig;
};
