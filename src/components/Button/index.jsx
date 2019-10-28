import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Button({
  text, type, className, onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.btn} ${className || ''}`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  text: '',
  onClick: null,
  className: '',
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
