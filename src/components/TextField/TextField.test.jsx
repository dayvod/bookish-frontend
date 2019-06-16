import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TextField from './index';

afterEach(cleanup);

test('displays textField with message', () => {
  const textFieldProps = {
    placeholder: 'e.g. John123',
    labelText: 'Username',
    inputType: 'text',
    inputId: 'testField',
    message: 'Please enter a valid username',
    hasError: true,
  };

  const { queryByText } = render(
    <TextField
      {...textFieldProps}
    />,
  );

  expect(queryByText('Please enter a valid username')).toBeVisible();
});

test('displays text field', () => {
  const textFieldProps = {
    placeholder: 'e.g. John123',
    labelText: 'Username',
    inputType: 'text',
    inputId: 'testField',
  };

  const { queryByLabelText, queryByTestId } = render(
    <TextField
      {...textFieldProps}
    />,
  );

  expect(queryByLabelText('Username')).toBeVisible();
  expect(queryByTestId('textField-message')).toBeEmpty();
});
