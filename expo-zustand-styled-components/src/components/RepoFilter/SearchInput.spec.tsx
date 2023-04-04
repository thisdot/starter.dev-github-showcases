import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchInput from './SearchInput';
import { useRepoFilterStore } from '../../hooks/stores';

jest.mock('../../hooks/stores', () => ({
  useRepoFilterStore: jest.fn(),
}));

describe('SearchInput', () => {
  const mockedStore = useRepoFilterStore as jest.MockedFunction<typeof useRepoFilterStore>;

  beforeEach(() => {
    mockedStore.mockReturnValue({
      search: '',
      setSearch: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the search input', () => {
    const { getByPlaceholderText } = render(<SearchInput screenWidth={360} />);
    expect(getByPlaceholderText('Find a repository...')).toBeDefined();
  });

  it('should update the search text when the input value changes', () => {
    const { getByPlaceholderText } = render(<SearchInput screenWidth={360} />);
    const input = getByPlaceholderText('Find a repository...');
    fireEvent.changeText(input, 'test');
    expect(mockedStore().setSearch).toHaveBeenCalledWith('test');
  });
});
