import React from 'react';
import { render } from '@testing-library/react-native';
import RepoActionButtons from '../RepoActionButtons';
import { useRepoInfoStore } from '../../hooks/stores';

jest.mock('../../hooks/stores', () => ({
  useRepoInfoStore: jest.fn(),
}));

describe('RepoActionButtons', () => {
  const mockUseRepoInfoStore = useRepoInfoStore as jest.MockedFunction<typeof useRepoInfoStore>;
  
  it('renders three buttons', () => {
    mockUseRepoInfoStore.mockReturnValue({
      name: 'my-repo',
      owner: 'my-org',
      info: { watcherCount: 0, stargazerCount: 0, forkCount: 0 },
    });

    const { queryAllByTestId } = render(<RepoActionButtons />);
    const buttons = queryAllByTestId('count-button-group');
    expect(buttons.length).toBe(3);
  });
});
