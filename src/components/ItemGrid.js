import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    paddingTop: '4rem',
    paddingLeft: '4rem',
    color: '#ccc',
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
});
const ItemGrid = ({ items, type, name }) => {
  const classes = useStyles();
  const title = type === 'movie' ? 'title' : 'name';

  return (
    <div className={classes.container}>
      <Typography variant="h4">{name}</Typography>
      <ul className={classes.root}>
        {items.map(item => (
          <li key={item[title]} className={classes.list}>
            <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item[title]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemGrid;
