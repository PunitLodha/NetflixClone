import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const useStyles = makeStyles({
  conatiner: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    paddingLeft: '2rem',
  },
  item: {
    display: 'flex',
    padding: '2rem 1rem',
    maxWidth: '80rem',
    color: theme => `${theme.secondary}`,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: theme => `${theme.card}`,
    },
  },
  poster: {
    marginRight: '1.5rem',
    borderRadius: '1rem',
  },
  result: {
    marginTop: '2rem',
  },
});

const DiscoverResults = ({ results, type }) => {
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const classes = useStyles(theme);
  const title = type === 'movie' ? 'title' : 'name';
  const link = type === 'movie' ? 'movies' : 'tv';
  return (
    <>
      <Typography variant="h4" className={classes.result}>
        Results
      </Typography>
      <ul className={classes.conatiner}>
        {results.map(result => (
          <li key={result.id}>
            <Link to={`/${link}/${result.id}`} key={result.id} className={classes.item}>
              <img
                src={`https://image.tmdb.org/t/p/w154${result.poster_path}`}
                alt={result[title]}
                className={classes.poster}
              />
              <Typography variant="h6">{result.overview}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DiscoverResults;
