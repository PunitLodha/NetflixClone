import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Discover from './components/Discover';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3c3c3c',
      main: '#161616',
      dark: '##000000',
      contrastText: '#fff',
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/tv" component={Tv} />
            <Route path="/discover" component={Discover} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
