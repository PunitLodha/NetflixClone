import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const baseUrl = 'https://api.themoviedb.org/3/';

const apiUrl = `api_key=${API_KEY}`;

export const getConfiguration = async () => {
  const configuration = await axios.get(`${baseUrl}configuration?${apiUrl}`).then(data => data);
  const imageConfig = configuration.data.images;
  return imageConfig;
};

export const getTopRatedMovies = async () => {
  const topRatedMovies = await axios
    .get(`${baseUrl}movie/top_rated?${apiUrl}&language=en-US`)
    .then(data => data);
  return topRatedMovies;
};

export const getPopularMovies = async () => {
  const popularMovies = await axios
    .get(`${baseUrl}movie/popular?${apiUrl}&language=en-US`)
    .then(data => data);
  return popularMovies;
};

export const getUpcomingMovies = async () => {
  const upcomingMovies = await axios
    .get(`${baseUrl}movie/upcoming?${apiUrl}&language=en-US`)
    .then(data => data);
  return upcomingMovies;
};

export const getNowPlayingMovies = async () => {
  const nowPlayingMovies = await axios
    .get(`${baseUrl}movie/now_playing?${apiUrl}&language=en-US`)
    .then(data => data);
  return nowPlayingMovies;
};
