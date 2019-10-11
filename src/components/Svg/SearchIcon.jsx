import React from 'react';
import PropTypes from 'prop-types';

function SearchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path d="m505 442.7-99.7-99.7c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.7 44-128 0-114.9-93.1-208-208-208s-208 93.1-208 208 93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zm-297-106.7c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />

    </svg>
  );
}

SearchIcon.defaultProps = {
  className: '',
};

SearchIcon.propTypes = {
  className: PropTypes.string,
};

export default SearchIcon;