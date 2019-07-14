import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import SearchResult from './index';

// searchResults =
// [{title: '', author: '', score: '', link: ''}]
function SearchResults({ results }) {
  return (
    <section data-testid="">
      {
        results.map(result => (
          <SearchResult
            title={result.title}
            author={result.author}
            link={result.link}
            score={result.score}
            key={uniqid('search-result-')}
          />
        ))
      }
    </section>
  );
}

SearchResults.defaultProps = {
  results: [],
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    author: PropTypes.string,
    score: PropTypes.number,
    link: PropTypes.string,
  })),

};
export default SearchResults;
