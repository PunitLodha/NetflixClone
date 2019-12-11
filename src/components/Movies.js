import React, { useState, useEffect, useContext } from 'react';
import { Typography } from '@material-ui/core';
import {
  getTopRatedMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from '../api/TmdbAPI';
import ItemGrid from './ItemGrid';
import { MoviesContext } from './MoviesContext';

const Movies = () => {
  const { movies } = useContext(MoviesContext);
  /* const [movies, setmovies] = useState([]);

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
  }, []); */

  return (
    <div>
      {movies.topRated && movies.popular && movies.nowPlaying && movies.upcoming ? (
        <>
          <ItemGrid items={movies.topRated} type="movie" name="Top Rated" />
          <ItemGrid items={movies.nowPlaying} type="movie" name="Now Playing" />
          <ItemGrid items={movies.popular} type="movie" name="Popular" />
          <ItemGrid items={movies.upcoming} type="movie" name="Upcoming" />
        </>
      ) : (
        <Typography variant="h3" color="secondary">
          Loading
        </Typography>
      )}
    </div>
  );
};

export default Movies;
