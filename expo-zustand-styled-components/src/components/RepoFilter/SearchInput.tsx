import React from 'react';
import { SearchTextInput } from './RepoFilter.styles';

const SearchInput = () => {
  const handleOnChangeText = (value: string) => {
    // value
  }
  return (
    <SearchTextInput
      placeholder="find a repository.."
      onChangeText={handleOnChangeText}
      clearButtonMode="while-editing"
      inputModde="search"
      placeholderTextColor=''
    />
  );
};

export default SearchInput;
