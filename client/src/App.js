import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import GlobalStyles from './Globalstyles.js';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/" />
        <Route exact path="/home" />
      </Router>
    </>
  );
}

export default App;
