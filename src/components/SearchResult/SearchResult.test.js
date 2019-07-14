import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchResult from './index';

afterEach(cleanup);

test('should display title', () => {
  const props = {
    title: "Chain of Title: How Three Ordinary Americans Uncovered Wall Street's Great Foreclosure Fraud",
    author: 'David Dayen',
    score: 4.67,
    link: 'www.google.com',
  };

  const { queryByText } = render(
    <SearchResult
      title={props.title}
      author={props.author}
      score={props.score}
      link={props.link}
    />,
  );

  expect(queryByText(props.title)).toBeVisible();
});

test('should display author\'s name', () => {
  const props = {
    title: "Chain of Title: How Three Ordinary Americans Uncovered Wall Street's Great Foreclosure Fraud",
    author: 'David Dayen',
    score: 4.67,
    link: 'www.google.com',
  };

  const { queryByText } = render(
    <SearchResult
      title={props.title}
      author={props.author}
      score={props.score}
      link={props.link}
    />,
  );
  expect(queryByText(`by ${props.author}`)).toBeVisible();
});

test('should display score', () => {
  const props = {
    title: "Chain of Title: How Three Ordinary Americans Uncovered Wall Street's Great Foreclosure Fraud",
    author: 'David Dayen',
    score: 3.67,
    link: 'www.google.com',
  };

  const { queryByText } = render(
    <SearchResult
      title={props.title}
      author={props.author}
      score={props.score}
      link={props.link}
    />,
  );

  expect(queryByText(props.score.toString())).toBeVisible();
});
