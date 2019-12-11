import React, { useState, useEffect, useContext } from 'react';
import { Typography } from '@material-ui/core';
import {
  getOnTheAirTvShows,
  getTopRatedTvShows,
  getPopularTvShows,
  getAiringTodayTvShows,
} from '../api/TmdbAPI';
import ItemGrid from './ItemGrid';
import { MoviesContext } from './MoviesContext';

const Tv = () => {
  const { tvShows } = useContext(MoviesContext);
  /* const [tvShows, settvShows] = useState([]);

  useEffect(() => {
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
  }, []); */

  return (
    <div>
      {tvShows.topRated && tvShows.popular && tvShows.onTheAir && tvShows.airingToday ? (
        <>
          <ItemGrid items={tvShows.topRated} type="TV" name="Top Rated" />
          <ItemGrid items={tvShows.onTheAir} type="TV" name="On The Air" />
          <ItemGrid items={tvShows.popular} type="TV" name="Popular" />
          <ItemGrid items={tvShows.airingToday} type="TV" name="Airing Today" />
        </>
      ) : (
        <Typography variant="h3" color="secondary">
          Loading
        </Typography>
      )}
    </div>
  );
};

export default Tv;
