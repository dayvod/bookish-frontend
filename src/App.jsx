import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import Search from './components/Search';

/* eslint react/prefer-stateless-function: [0] */
class App extends Component {
  render() {
    return (
      <Search />

    );
  }
}

export default hot(module)(App);
