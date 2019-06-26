import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Button({ text, type, onClick }) {
  return (
    /* eslint-disable react/button-has-type */
    <button type={type} onClick={onClick} className={styles.btn}>{text}</button>
  );
}

Button.defaultProps = {
  type: 'button',
  text: '',
  onClick: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
