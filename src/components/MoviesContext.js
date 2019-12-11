import React, { createContext, useState, useEffect } from 'react';
import {
  getTopRatedMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getOnTheAirTvShows,
  getTopRatedTvShows,
  getPopularTvShows,
  getAiringTodayTvShows,
} from '../api/TmdbAPI';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setmovies] = useState([]);
  const [tvShows, settvShows] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then(({ data }) => {
      setmovies(prevState => ({
        ...prevState,
        topRated: data.results,
      }));
    });

    getPopularMovies().then(({ data }) => {
      setmovies(prevState => ({
        ...prevState,
        popular: data.results,
      }));
    });

    getUpcomingMovies().then(({ data }) => {
      setmovies(prevState => ({
        ...prevState,
        upcoming: data.results,
      }));
    });

    getNowPlayingMovies().then(({ data }) => {
      setmovies(prevState => ({
        ...prevState,
        nowPlaying: data.results,
      }));
    });

    getTopRatedTvShows().then(({ data }) => {
      settvShows(prevState => ({
        ...prevState,
        topRated: data.results,
      }));
    });

    getPopularTvShows().then(({ data }) => {
      settvShows(prevState => ({
        ...prevState,
        popular: data.results,
      }));
    });

    getOnTheAirTvShows().then(({ data }) => {
      settvShows(prevState => ({
        ...prevState,
        onTheAir: data.results,
      }));
    });

    getAiringTodayTvShows().then(({ data }) => {
      settvShows(prevState => ({
        ...prevState,
        airingToday: data.results,
      }));
    });
  }, []);

  return <MoviesContext.Provider value={{ movies, tvShows }}>{children}</MoviesContext.Provider>;
};

export default MoviesContextProvider;
