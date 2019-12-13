import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Discover from './components/Discover';
import MoviesContextProvider from './components/MoviesContext';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import ScrollToTop from './components/ScrollToTop';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3c3c3c',
      main: '#161616',
      dark: '##000000',
      contrastText: '#fff',
    },
    background: {
      default: '#161616',
    },
  },
  typography: {
    fontFamily: '"Oswald","Roboto", "Helvetica", "Arial", sans-serif',
    htmlFontSize: 10,
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MoviesContextProvider>
          <Router>
            <ScrollToTop />
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/tv" exact component={Tv} />
              <Route path="/discover" component={Discover} />
              <Route path="/movies/:id" component={MovieDetails} />
              <Route path="/tv/:id" component={TvDetails} />
            </Switch>
          </Router>
        </MoviesContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
