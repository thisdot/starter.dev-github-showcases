import React from 'react';
import { render, screen } from '@testing-library/react-native';
import FileTree from './FileTree';
import { useRepoInfoStore } from '../../hooks/stores';
import getRepoTree from '../../services/get-repo-tree';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../../hooks/stores', () => ({
  useRepoInfoStore: jest.fn(),
}));

jest.mock('../../services/get-repo-tree', () => jest.fn());

describe('FileTree', () => {
  const mockStore = useRepoInfoStore as jest.MockedFunction<typeof useRepoInfoStore>;
  const Component = (props: { path?: string; branch?: string }) => (
    <NavigationContainer>
      <FileTree {...props} />
    </NavigationContainer>
  );

  beforeEach(() => {
    mockStore.mockReturnValue({
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
    });

    (getRepoTree as jest.Mock).mockResolvedValue({});
  });

  test('renders file tree without path', () => {
    render(<Component />);
    expect(screen.queryByText('..')).toBeFalsy();
    expect(screen.getByText('folder')).toBeTruthy();
    expect(screen.getByText('file.txt')).toBeTruthy();
  });

  test('renders file tree with path', () => {
    render(<Component path="src/components" />);
    expect(screen.getByText('..')).toBeTruthy();
    expect(screen.getByText('folder')).toBeTruthy();
    expect(screen.getByText('file.txt')).toBeTruthy();
  });

  test('renders file tree with custom branch', () => {
    render(<Component path="src/components" branch="custom-branch" />);
    expect(screen.getByText('..')).toBeTruthy();
    expect(screen.getByText('folder')).toBeTruthy();
    expect(screen.getByText('file.txt')).toBeTruthy();
  });

  test('fetches repo tree on mount', () => {
    render(<Component />);
    expect(getRepoTree).toHaveBeenCalled();
  });
});
