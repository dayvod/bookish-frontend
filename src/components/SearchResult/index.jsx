import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import styles from './styles.scss';

function SearchResult({
  title, author, score, link,
}) {
  return (
    <section className={styles.searchResult}>
      <h2 className={styles.title}>
        <a href={link} className={styles.link}>{title}</a>
        <span className={styles.author}>
          {`by ${author}`}
        </span>
      </h2>
      <div className={styles.rating}>
        <Rating score={score} />
        <span className={styles.score}>{score}</span>
      </div>
    </section>
  );
}

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default SearchResult;
