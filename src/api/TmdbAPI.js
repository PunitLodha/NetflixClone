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

export const getTopRatedTvShows = async () => {
  const topRatedTvShows = await axios
    .get(`${baseUrl}tv/top_rated?${apiUrl}&language=en-US`)
    .then(data => data);
  return topRatedTvShows;
};

export const getPopularTvShows = async () => {
  const popularTvShows = await axios
    .get(`${baseUrl}tv/popular?${apiUrl}&language=en-US`)
    .then(data => data);
  return popularTvShows;
};

export const getOnTheAirTvShows = async () => {
  const onTheAirTvShows = await axios
    .get(`${baseUrl}tv/on_the_air?${apiUrl}&language=en-US`)
    .then(data => data);
  return onTheAirTvShows;
};

export const getAiringTodayTvShows = async () => {
  const airingTodayTvShows = await axios
    .get(`${baseUrl}tv/airing_today?${apiUrl}&language=en-US`)
    .then(data => data);
  return airingTodayTvShows;
};

export const getMovieDetails = async id => {
  const movieDetails = await axios
    .get(
      `${baseUrl}movie/${id}?${apiUrl}&append_to_response=videos,recommendations,credits&language=en-US`,
    )
    .then(data => data);
  return movieDetails;
};

export const getTvDetails = async id => {
  const tvDetails = await axios
    .get(
      `${baseUrl}tv/${id}?${apiUrl}&append_to_response=videos,recommendations,credits&language=en-US`,
    )
    .then(data => data);
  return tvDetails;
};

export const getDiscoverResults = async (type, rating, genre, sortBy, year) => {
  if (type === 'movie') {
    const results = await axios
      .get(
        `${baseUrl}discover/movie?${apiUrl}&language=en-US&sort_by=${sortBy}&primary_release_year=${year}&vote_average.gte=${rating}&with_genres=${genre}&include_adult=false&include_video=false&page=1`,
      )
      .then(data => data);
    return results;
  }
  const results = await axios
    .get(
      `${baseUrl}discover/tv?${apiUrl}&language=en-USsort_by=${sortBy}&first_air_date_year=${year}&page=1&vote_average.gte=${rating}&with_genres=${genre}&include_null_first_air_dates=false`,
    )
    .then(data => data);
  return results;
};
