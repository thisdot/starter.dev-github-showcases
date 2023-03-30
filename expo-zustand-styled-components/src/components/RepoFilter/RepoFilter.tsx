import { useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import FilterDropdown from '../FilterDropdown';
import { RepoFilterWrapper, FiltersWrapper, RepoBtn, RepoBtnText } from './RepoFilter.styles';
import { FILTER_TYPE_OPTIONS, SORT_OPTIONS, defaultLanguage } from './data';
import { useRepoFilterStore } from '../../hooks/stores';
import RepoBookIcon from '../Icons/RepoBookIcon';
import FilterText from './FilterText';
import { FilterType } from '../../hooks/stores/useRepoFilterStore';

interface RepoFilterProps {
  languages: string[];
  filteredRepoCount: number;
  repoBtnText?: string;
}
const RepoFilter = ({ languages, filteredRepoCount, repoBtnText }: RepoFilterProps) => {
  const { width } = useWindowDimensions();

  const typeOptions = Object.values(FILTER_TYPE_OPTIONS);
  const sortOptions = Object.values(SORT_OPTIONS);
  const { language, sortBy, filterType, setLanguage, setSortBy, setFilterType, search } =
    useRepoFilterStore();
  const [showOptions, setShowOptions] = useState(null);

  const selectLanguage = (value) => setLanguage(value);
  const selectType = (value: FilterType) => setFilterType(value);
  const selectSort = (value) => setSortBy(value);

  // change this const when we'll add also the other sort functions
  const isSomeFilterSelected =
    search !== '' ||
    filterType !== FILTER_TYPE_OPTIONS.default ||
    sortBy !== SORT_OPTIONS.default ||
    language !== defaultLanguage;

  return (
    <View style={{ backgroundColor: 'white' }}>
      <RepoFilterWrapper screenWidth={width}>
        <SearchInput screenWidth={width} />
        <FiltersWrapper screenWidth={width} horizontal contentContainerStyle={{ flexGrow: 1 }}>
          <FilterDropdown
            name="Type"
            items={typeOptions}
            selectOption={selectType}
            selected={filterType}
            showOptions={showOptions}
            setShowOptions={(value) => setShowOptions(value)}
          />
          <FilterDropdown
            name="Sort"
            items={sortOptions}
            selectOption={selectSort}
            selected={sortBy}
            showOptions={showOptions}
            setShowOptions={(value) => setShowOptions(value)}
          />
          <FilterDropdown
            name="Langauge"
            items={languages}
            selectOption={selectLanguage}
            selected={language}
            showOptions={showOptions}
            setShowOptions={(value) => setShowOptions(value)}
          />
          <RepoBtn activeOpacity={0.8}>
            <RepoBookIcon color="#fff" />
            <RepoBtnText>{repoBtnText || 'New'}</RepoBtnText>
          </RepoBtn>
        </FiltersWrapper>
      </RepoFilterWrapper>
      {isSomeFilterSelected && <FilterText filteredRepoCount={filteredRepoCount} />}
    </View>
  );
};

export default RepoFilter;
