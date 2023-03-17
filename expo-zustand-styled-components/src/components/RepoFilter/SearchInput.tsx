import React from 'react';
import { SearchTextInput } from './RepoFilter.styles';
import { useRepoFilterStore } from '../../hooks/stores';

const SearchInput = ({ screenWidth }: { screenWidth: number }) => {
  const { search, setSearch } = useRepoFilterStore();
  const handleOnChangeText = (value: string) => {
    setSearch(value);
  };
  return (
    <SearchTextInput
      value={search}
      screenWidth={screenWidth}
      placeholder="Find a repository..."
      onChangeText={handleOnChangeText}
      clearButtonMode="while-editing"
    />
  );
};

export default SearchInput;
