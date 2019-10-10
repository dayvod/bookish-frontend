import React, { Component } from 'react';
import SearchResults from '../SearchResult/SearchResults';
import SearchField from '../SearchField';

/* eslint react/prefer-stateless-function: [0] */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {
          title: "Chain of Title: How Three Ordinary Americans Uncovered Wall Street's Great Foreclosure Fraud",
          author: 'David Dayen',
          score: 4.67,
          link: 'www.google.com',
        },
        {
          title: 'Johnny Got His Gun',
          author: 'Dalton Trumbo',
          score: 4.17,
          link: 'https://www.goodreads.com/blog/show/1629?int=yaweek2019_eb',
        },
        {
          title: 'The Heritage: Black Athletes, a Divided America, and the Politics of Patriotism',
          author: 'Howard Bryant',
          score: 4.39,
          link: 'https://www.goodreads.com/book/show/36739800-the-heritage',
        },
      ],
    };
  }

  render() {
    const { results } = this.state;

    return (
      <React.Fragment>
        <SearchField />
        <SearchResults results={results} />
      </React.Fragment>
    );
  }
}

export default Search;
