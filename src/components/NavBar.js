import React, { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  FormControlLabel,
  Switch,
  useMediaQuery,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
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
    '@media (max-width:720px)': {
      padding: '0 0.5rem',
    },
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
  menuItem: {
    textDecoration: 'none',
    color: theme => `${theme.secondary}`,
  },
});

const NavBar = () => {
  const { isLight, dark, light, handleChange } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const mobile = useMediaQuery('(max-width:720px)');
  const display = mobile ? 'none' : 'block';
  const menu = mobile ? 'block' : 'none';
  const logoMargin = mobile ? 'auto' : '0';
  const classes = useStyles(theme);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <ul className={classes.nav}>
            <Link to="/NetflixClone/" style={{ marginRight: logoMargin }}>
              <li>
                <img src={logo} alt="Netflix logo" className={classes.img} />
              </li>
            </Link>
            <NavLink style={{ display }} exact className={classes.linkStyle} to="/NetflixClone/">
              <li>
                <Typography variant="h6">Home</Typography>
              </li>
            </NavLink>
            <NavLink style={{ display }} className={classes.linkStyle} to="/NetflixClone/movies">
              <li>
                <Typography variant="h6">Movies</Typography>
              </li>
            </NavLink>
            <NavLink style={{ display }} className={classes.linkStyle} to="/NetflixClone/tv">
              <li>
                <Typography variant="h6">TV Shows</Typography>
              </li>
            </NavLink>
            <NavLink
              className={classes.linkStyle}
              to="/NetflixClone/discover"
              style={{ marginRight: 'auto', display }}
            >
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
            <IconButton style={{ display: menu }} onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/NetflixClone/" className={classes.menuItem}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              <Link to="/NetflixClone/movies" className={classes.menuItem}>
                <MenuItem onClick={handleClose}>Movies</MenuItem>
              </Link>
              <Link to="/NetflixClone/tv" className={classes.menuItem}>
                <MenuItem onClick={handleClose}>TV Shows</MenuItem>
              </Link>
              <Link to="/NetflixClone/discover" className={classes.menuItem}>
                <MenuItem onClick={handleClose}>Discover</MenuItem>
              </Link>
            </Menu>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
