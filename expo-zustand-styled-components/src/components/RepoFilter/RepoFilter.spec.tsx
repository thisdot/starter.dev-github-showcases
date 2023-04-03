import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import RepoFilter from './RepoFilter';

import { useRepoFilterStore } from '../../hooks/stores';
// import { useWindowDimensions } from 'react-native';

jest.mock('../../hooks/stores', () => ({
  useRepoFilterStore: jest.fn(),
}));

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: jest.fn(),
// }))

// jest.mock('react-native/Libraries/Utilities/useWindowDimensions', () => (
//    {
//     default: jest.fn(() => ({ width: 300 }))
//   }
// ))

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

  // it('should show options when a filter is clicked', () => {
  //  const x = render(
  //     <RepoFilter
  //       languages={languages}
  //       filteredRepoCount={filteredRepoCount}
  //       repoBtnText={repoBtnText}
  //     />
  //   );

  //   x.debug();
  //   expect(screen.getByText('JavaScript')).toBeTruthy();
  //   fireEvent.press(screen.getByText('Langauge'));
  //   expect(screen.getByText('JavaScript')).toBeTruthy();
  // });

  //   it('should call the selectLanguage function when a language is selected', () => {
  //     const { getByText } = render(
  //       <RepoFilter
  //         languages={languages}
  //         filteredRepoCount={filteredRepoCount}
  //         repoBtnText={repoBtnText}
  //       />
  //     );
  //     fireEvent.press(getByText('Langauge'));
  //     fireEvent.press(getByText('Python'));
  //     expect(mockedStore().setLanguage).toHaveBeenCalledWith('Python');
  //   });

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

  //   it('should render the filtered repo count if some filter is selected', () => {
  //     const { rerender } = render(
  //       <RepoFilter
  //         languages={languages}
  //         filteredRepoCount={filteredRepoCount}
  //         repoBtnText={repoBtnText}
  //       />
  //     );
  //     expect(screen.queryByText('10 repositories found')).toBeNull();
  //     mockedStore.mockReturnValue({ search: 'query' });
  //     rerender(
  //       <RepoFilter languages={languages} filteredRepoCount={filteredRepoCount} />
  //     );
  //     expect(screen.getByText('10 repositories found')).toBeTruthy();
  //   });
});
