import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import ItemGrid from './ItemGrid';
import { MoviesContext } from './MoviesContext';

const Home = () => {
  const { movies, tvShows } = useContext(MoviesContext);
  return (
    <div>
      {movies.topRated &&
      movies.popular &&
      movies.nowPlaying &&
      movies.upcoming &&
      tvShows.topRated &&
      tvShows.popular &&
      tvShows.onTheAir &&
      tvShows.airingToday ? (
        <>
          <ItemGrid items={movies.topRated} type="movie" name="Top Rated Movies" />
          <ItemGrid items={tvShows.topRated} type="TV" name="Top Rated TV Shows" />
          <ItemGrid items={movies.nowPlaying} type="movie" name="Now Playing Movies" />
          <ItemGrid items={tvShows.onTheAir} type="TV" name="On The Air TV Shows" />
          <ItemGrid items={movies.popular} type="movie" name="Popular Movies" />
          <ItemGrid items={tvShows.popular} type="TV" name="Popular TV Shows" />
          <ItemGrid items={movies.upcoming} type="movie" name="Upcoming Movies" />
          <ItemGrid items={tvShows.airingToday} type="TV" name="Airing Today TV Shows" />
        </>
      ) : (
        <Typography variant="h3" color="secondary">
          Loading
        </Typography>
      )}
    </div>
  );
};

export default Home;
