import React from 'react';
import { render, screen } from '@testing-library/react-native';
import FileTree from './FileTree';
import getRepoTree from '../../services/get-repo-tree';

jest.mock('../../hooks/stores', () => ({
  useRepoInfoStore: jest.fn().mockReturnValue({
    owner: 'test-owner',
    name: 'test-repo',
    tree: [
      {
        name: 'folder',
        type: 'tree',
        path: 'folder',
      },
      {
        name: 'file.txt',
        type: 'blob',
        path: 'file.txt',
      },
    ],
    branch: 'main',
  }),
}));

jest.mock('../../services/get-repo-tree', () => jest.fn().mockResolvedValue(1));

describe('FileTree', () => {
  test('renders file tree without path', () => {
    render(<FileTree />);
    expect(screen.queryByText('..')).toBeFalsy();
    expect(screen.getByText('folder')).toBeTruthy();
    expect(screen.getByText('file.txt')).toBeTruthy();
  });

  test('renders file tree with path', () => {
    render(<FileTree path="src/components" />);
    expect(screen.getByText('..')).toBeTruthy();
    expect(screen.getByText('folder')).toBeTruthy();
    expect(screen.getByText('file.txt')).toBeTruthy();
  });

  test('renders file tree with custom branch', () => {
    render(<FileTree path="src/components" branch="custom-branch" />);
    expect(screen.getByText('..')).toBeTruthy();
    expect(screen.getByText('folder')).toBeTruthy();
    expect(screen.getByText('file.txt')).toBeTruthy();
  });

  test('fetches repo tree on mount', () => {
    render(<FileTree />);
    expect(getRepoTree).toHaveBeenCalled();
  });
});
