import React from 'react';
import { render, screen } from '@testing-library/react-native';
import IssuePullRequestCard from './IssuePullRequestCard';

describe('IssuePullRequestCard', () => {
  const props = {
    number: 123,
    title: 'Test title',
    url: '/test-url',
    state: 'open',
    createdAt: '2022-03-01T00:00:00.000Z',
    login: 'test-login',
    commentCount: 2,
    labels: [{ name: 'test-label', color: '123456' }],
    cardType: 'issue',
  };

  beforeEach(() => {
    render(<IssuePullRequestCard {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render card with correct title', () => {
    expect(screen.getByText(props.title)).toBeTruthy();
  });

  it('should render card with correct label', () => {
    expect(screen.getByText(props.labels[0].name)).toBeTruthy();
  });

  it('should render card with correct footer text', () => {
    const expectedText = `#${props.number} by ${props.login} was opened on Mar 1, 2022`;
    expect(screen.getByText(expectedText)).toBeTruthy();
  });
});
