import { useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import FilterDropdown from '../FilterDropdown';
import { RepoFilterWrapper, FiltersWrapper, RepoBtn, RepoBtnText } from './RepoFilter.styles';
import { FILTER_TYPE_OPTIONS, SORT_OPTIONS } from './data';
import { useRepoFilterStore } from '../../hooks/stores';
import RepoBookIcon from '../Icons/RepoBookIcon';
import FilterText from './FilterText';

interface RepoFilterProps {
  languages: string[];
  filteredRepoCount: number;
  repoBtnText?: string;
}
const RepoFilter = ({ languages, filteredRepoCount, repoBtnText }: RepoFilterProps) => {
  const { width } = useWindowDimensions();

  const typeOptions = Object.values(FILTER_TYPE_OPTIONS);
  const sortOptions = Object.values(SORT_OPTIONS);
  const languageOptions = ['All', 'HTML', 'CSS', 'PHP']; //To be replaced with the actual languages for the repos
  const { language, sortBy, filterType, setLanguage, setSortBy, setFilterType } =
    useRepoFilterStore();
  const [showOptions, setShowOptions] = useState(null);

  const selectLanguage = (value) => setLanguage(value);
  const selectType = (value) => setFilterType(value);
  const selectSort = (value) => setSortBy(value);

  return (
    <>
      <RepoFilterWrapper screenWidth={width}>
        <SearchInput />
        <FiltersWrapper screenWidth={width}>
          <FilterDropdown
            name="Type"
            items={typeOptions}
            selectOption={selectType}
            zIndex={2000}
            selected={filterType}
            showOptions={showOptions}
            setShowOptions={(value) => setShowOptions(value)}
          />
          <FilterDropdown
            name="Sort"
            items={sortOptions}
            selectOption={selectSort}
            zIndex={1000}
            selected={sortBy}
            showOptions={showOptions}
            setShowOptions={(value) => setShowOptions(value)}
          />
          <FilterDropdown
            name="Langauge"
            items={languageOptions}
            selectOption={selectLanguage}
            zIndex={500}
            selected={language}
            showOptions={showOptions}
            setShowOptions={(value) => setShowOptions(value)}
          />
        </FiltersWrapper>
        <RepoBtn activeOpacity={0.8}>
          <RepoBookIcon color={'#FFF'} />
          <RepoBtnText>{repoBtnText || 'New'}</RepoBtnText>
        </RepoBtn>
      </RepoFilterWrapper>
      {/* Should show when repos are not just sorted */}
      <FilterText filteredRepoCount={filteredRepoCount} />
    </>
  );
};

export default RepoFilter;
