import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Button({
  text, type, className, onClick,
}) {
  const buttonClassName = className || styles.btn;

  return (
    /* eslint-disable react/button-has-type */
    <button type={type} onClick={onClick} className={buttonClassName}>
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
