import React from 'react';
import { render, screen } from '@testing-library/react-native';
import RepoFilter from './RepoFilter';

import { useRepoFilterStore } from '../../hooks/stores';

jest.mock('../../hooks/stores', () => ({
  useRepoFilterStore: jest.fn(),
}));

describe('RepoFilter', () => {
  const mockedStore = useRepoFilterStore as jest.MockedFunction<typeof useRepoFilterStore>;

  const languages = ['JavaScript', 'Python', 'Ruby'];
  const filteredRepoCount = 10;
  const repoBtnText = 'New';

  beforeEach(() => {
    mockedStore.mockReturnValue({
      language: 'JavaScript',
      sortBy: 'default',
      filterType: 'default',
      setLanguage: jest.fn(),
      setSortBy: jest.fn(),
      setFilterType: jest.fn(),
      search: '',
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the search input', () => {
    const { getByPlaceholderText } = render(
      <RepoFilter
        languages={languages}
        filteredRepoCount={filteredRepoCount}
        repoBtnText={repoBtnText}
      />
    );
    expect(getByPlaceholderText('Find a repository...')).toBeTruthy();
  });

  it('should render the filter dropdowns', () => {
    render(
      <RepoFilter
        languages={languages}
        filteredRepoCount={filteredRepoCount}
        repoBtnText={repoBtnText}
      />
    );
    expect(screen.getByText('Type')).toBeTruthy();
    expect(screen.getByText('Sort')).toBeTruthy();
    expect(screen.getByText('Langauge')).toBeTruthy();
  });

  it('should render the repo button with the given text', () => {
    render(
      <RepoFilter
        languages={languages}
        filteredRepoCount={filteredRepoCount}
        repoBtnText={repoBtnText}
      />
    );
    expect(screen.getByText('New')).toBeTruthy();
  });
});
