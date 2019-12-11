import React from 'react';
import { Typography } from '@material-ui/core';

const MovieDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <>
      <Typography variant="h1" align="center">
        Movie Details
      </Typography>
      <Typography variant="h3" align="center">
        {id}
      </Typography>
    </>
  );
};

export default MovieDetails;
