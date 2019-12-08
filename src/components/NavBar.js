import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import logo from '../NetflixLogo.svg';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '5rem',
    padding: '0 2rem',
    listStyle: 'none',
  },
  linkStyle: {
    color: '#ccc',
    textDecoration: 'none',
    margin: '0 2rem',
    '&:hover': {
      color: 'white',
    },
    '&.active': {
      color: 'white',
    },
  },
  img: {
    width: '10rem',
    margin: '0.6rem 2rem 0 0',
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <ul className={classes.nav}>
            <li>
              <img src={logo} alt="Netflix logo" className={classes.img} />
            </li>
            <NavLink exact className={classes.linkStyle} to="/">
              <li>
                <Typography variant="h6">Home</Typography>
              </li>
            </NavLink>
            <NavLink className={classes.linkStyle} to="/movies">
              <li>
                <Typography variant="h6">Movies</Typography>
              </li>
            </NavLink>
            <NavLink className={classes.linkStyle} to="/tv">
              <li>
                <Typography variant="h6">TV Shows</Typography>
              </li>
            </NavLink>
            <NavLink className={classes.linkStyle} to="/discover">
              <li>
                <Typography variant="h6">Discover</Typography>
              </li>
            </NavLink>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
