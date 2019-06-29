import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Rating from './index';

afterEach(cleanup);

// should do x
// when x happens

test('should display 4 solid stars, when a score is >= 4', () => {
  const score = 4.4;

  const { queryAllByTestId } = render(<Rating score={score} />);

  expect(queryAllByTestId('solid-star').length).toBe(4);
});

test('should display no empty stars, when score is > 4', () => {
  const score = 4.7;

  const { queryAllByTestId } = render(<Rating score={score} />);

  expect(queryAllByTestId('empty-star').length).toBe(0);
});

test('should display 1 half star, when score is a float', () => {
  const score = 2.5;

  const { queryAllByTestId } = render(<Rating score={score} />);

  expect(queryAllByTestId('half-star').length).toBe(1);
});

test('should display n empty stars, when n is > 1; n = MAX_STARS - score', () => {
  const score = 1.5;

  const { queryAllByTestId } = render(<Rating score={score} />);

  expect(queryAllByTestId('empty-star').length).toBe(3);
});
