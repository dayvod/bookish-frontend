import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

/* eslint react/prefer-stateless-function: [0] */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, Sweet.! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
