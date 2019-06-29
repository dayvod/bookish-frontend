import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import TextField from './components/TextField';
import Button from './components/Button';
import Rating from './components/Rating';

/* eslint react/prefer-stateless-function: [0] */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, Sweet.! </h1>
        <TextField placeholder="e.g. john" labelText="Username" inputId="username" />
        <Button text="Sign In" />
        <Rating score={10} />
      </div>
    );
  }
}

export default hot(module)(App);
