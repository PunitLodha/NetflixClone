import React from 'react';
import { Typography } from '@material-ui/core';

const TvDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <>
      <Typography variant="h1" align="center">
        Tv Details
      </Typography>
      <Typography variant="h3" align="center">
        {id}
      </Typography>
    </>
  );
};

export default TvDetails;
