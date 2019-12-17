import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, FormControlLabel, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import logo from '../NetflixLogo.svg';
import { ThemeContext } from './ThemeContext';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: theme => `${theme.background}`,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '5rem',
    width: '180rem',
    padding: '0 2rem',
    listStyle: 'none',
  },
  linkStyle: {
    color: theme => `${theme.text}`,
    textDecoration: 'none',
    margin: '0 2rem',
    '&:hover': {
      color: theme => `${theme.secondary}`,
    },
    '&.active': {
      color: theme => `${theme.secondary}`,
    },
  },
  img: {
    width: '10rem',
    margin: '0.6rem 2rem 0 0',
  },
  label: {
    color: theme => `${theme.secondary}`,
  },
});

const NavBar = () => {
  const { isLight, dark, light, handleChange } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const classes = useStyles(theme);
  return (
    <div>
      <AppBar position="sticky" className={classes.appBar}>
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
            <NavLink className={classes.linkStyle} to="/discover" style={{ marginRight: 'auto' }}>
              <li>
                <Typography variant="h6">Discover</Typography>
              </li>
            </NavLink>
            <FormControlLabel
              control={<Switch checked={!isLight} onChange={handleChange} />}
              label="DarkMode"
              classes={{
                label: classes.label,
              }}
            />
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
