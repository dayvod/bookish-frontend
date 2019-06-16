import React from 'react';
import PropTypes from 'prop-types';

function TextField({
  labelText,
  inputId,
  inputType,
  placeholder,
  message,
  hasError,
}) {
  return (
    <div>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        id={inputId}
        aria-invalid={hasError}
      />
      <span aria-live="assertive" aria-relevant="all" data-testid="textField-message">{message}</span>
    </div>
  );
}

TextField.defaultProps = {
  inputType: 'text',
  placeholder: '',
  message: '',
  hasError: false,
};

TextField.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  hasError: PropTypes.bool,
};

export default TextField;
