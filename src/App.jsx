import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import Search from './components/Search';
import styles from './sass/layout.scss';
import Nav from './components/Nav';

/* eslint react/prefer-stateless-function: [0] */
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Nav />
        </header>
        <div className={styles.container}>
          <Search />
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
