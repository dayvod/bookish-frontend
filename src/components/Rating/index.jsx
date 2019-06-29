import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import EmptyStarIcon from '../Svg/EmptyStar';
import HalfStarIcon from '../Svg/HalfStar';
import SolidStarIcon from '../Svg/SolidStar';
import styles from './styles.scss';

// 1. X full stars for x number of integers, e.g. 4.2 -> Four full stars
// 2. The remaining value gets one half star, e.g. 4.2 -> 1 half star because of 0.2
// 3. Must be a total of five stars for a score.
//      If the star total, doesn't reach 5, fill it with empty stars

// Needs to be refactor

function Rating({ score }) {
  // retrieve the total stars
  const maxStars = 5;
  const solidStarsCount = parseInt(score, 10);
  const halfStarsCount = (score - solidStarsCount) > 0 ? 1 : 0;
  const emptyStarsCount = maxStars - solidStarsCount - halfStarsCount;
  const stars = [];

  if (score > maxStars) {
    for (let i = 0; i < maxStars; i += 1) {
      stars.push(
        <SolidStarIcon
          key={uniqid('star-')}
          containerClassName={styles.star}
        />,
      );
    }
    return (
      <div className={styles.rating}>
        {stars}
      </div>
    );
  }

  // add solid stars
  for (let i = 0; i < solidStarsCount; i += 1) {
    stars.push(
      <SolidStarIcon
        key={uniqid('star-')}
        containerClassName={styles.star}
      />,
    );
  }

  // add half stars
  if (halfStarsCount === 1) {
    stars.push(<HalfStarIcon
      key={uniqid('star-')}
      containerClassName={styles.star}
    />);
  }

  // add empty stars
  for (let i = 0; i < emptyStarsCount; i += 1) {
    stars.push(<EmptyStarIcon
      key={uniqid('star-')}
      containerClassName={styles.star}
    />);
  }

  return (
    <div className={styles.rating}>
      {stars}
    </div>
  );
}

Rating.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Rating;
