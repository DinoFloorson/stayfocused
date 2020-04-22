import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import GlobalStyles from '../src/GlobalStyles';
import SignIn from '../src/pages/SignIn';
import Home from '../src/pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <SignIn />
        </Route>{' '}
        <Route exact path="/home"></Route> <Home />
      </Router>
    </>
  );
}

export default App;
