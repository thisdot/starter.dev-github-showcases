import React from 'react';
import { render, screen } from '@testing-library/react-native';
import BranchNavigation from './BranchNavigation';
import { useRepoInfoStore } from '../../hooks/stores';

jest.mock('../../hooks/stores', () => ({
  useRepoInfoStore: jest.fn().mockReturnValue({
      name: 'test-repo',
      owner: 'test-owner',
      branch: 'main',
    });,
}));

describe('BranchNavigation', () => {
  test('renders branch navigation without path', () => {
    render(<BranchNavigation />);
    expect(screen.getByText('main')).toBeTruthy();
  });

  test('renders branch navigation with path', () => {
    render(<BranchNavigation path="src/components" />);
    expect(screen.getByText('main')).toBeTruthy();
    expect(screen.getByText('src')).toBeTruthy();
    expect(screen.getByText('components')).toBeTruthy();
  });

  test('renders branch navigation with custom branch', () => {
    render(<BranchNavigation path="src/components" branch="custom-branch" />);
    expect(screen.getByText('custom-branch')).toBeTruthy();
    expect(screen.getByText('src')).toBeTruthy();
    expect(screen.getByText('components')).toBeTruthy();
  });
});
