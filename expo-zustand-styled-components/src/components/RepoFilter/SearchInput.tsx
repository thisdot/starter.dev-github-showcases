import React from 'react';
import { SearchTextInput } from './RepoFilter.styles';
import { useRepoFilterStore } from '../../hooks/stores';

const SearchInput = () => {
  const { search, setSearch } = useRepoFilterStore();
  const handleOnChangeText = (value: string) => {
    setSearch(value);
  };
  return (
    <SearchTextInput
      value={search}
      placeholder="Find a repository..."
      onChangeText={handleOnChangeText}
      clearButtonMode="while-editing"
    />
  );
};

export default SearchInput;
