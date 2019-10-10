import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

function TextField({
  labelText,
  inputId,
  inputType,
  placeholder,
  message,
  hasError,
  hasLabel,
}) {
  const inputClassNames = hasError ? `${styles.input} ${styles.error}` : styles.input;
  const msgClassNames = hasError ? `${styles.msg} ${styles.error}` : styles.msg;
  const label = hasLabel
    ? <label className={styles.label} htmlFor={inputId}>{labelText}</label>
    : null;

  return (
    <React.Fragment>
      {label}
      <input
        className={inputClassNames}
        type={inputType}
        placeholder={placeholder}
        id={inputId}
        aria-invalid={hasError}
        aria-label={hasLabel ? null : labelText}
      />
      <span
        className={msgClassNames}
        aria-live="assertive"
        aria-relevant="all"
        data-testid="textField-message"
      >
        {message}
      </span>
    </React.Fragment>
  );
}

TextField.defaultProps = {
  inputType: 'text',
  placeholder: '',
  message: '',
  hasError: false,
  hasLabel: true,
};

TextField.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  hasError: PropTypes.bool,
  hasLabel: PropTypes.bool,
};

export default TextField;
