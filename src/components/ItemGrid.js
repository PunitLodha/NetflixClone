import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const useStyles = makeStyles({
  container: {
    paddingTop: '4rem',
    paddingLeft: '4rem',
    color: theme => `${theme.text}`,
  },
  root: {
    height: '58rem',
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
    overflowY: 'hidden',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    transition: 'all 0.5s',
    '&:hover li': {
      opacity: '0.5',
      transform: 'translateX(-2rem)',
    },
  },
  list: {
    margin: '0 5px',
    transition: 'all 0.5s',
    '&&:hover': {
      opacity: '1',
      transform: 'scale(1.1) translateX(0)',
    },
    '&&:hover ~ *': {
      transform: 'translateX(2rem)',
    },
  },
  poster: {
    borderRadius: '2rem',
  },
});

const ItemGrid = ({ items, type, name }) => {
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const classes = useStyles(theme);
  const title = type === 'movie' ? 'title' : 'name';

  return (
    <div className={classes.container}>
      <Typography variant="h4">{name}</Typography>
      <ul className={classes.root}>
        {items.map(item => (
          <li key={item.id} className={classes.list}>
            <Link to={`/${type}/${item.id}`} key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                alt={item[title]}
                className={classes.poster}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemGrid;
