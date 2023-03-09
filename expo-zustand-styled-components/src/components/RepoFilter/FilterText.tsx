import CloseIcon from '../Icons/CloseIcon';
import { defaultFilterType, defaultLanguage } from './data';
import {
  FilterTextWrapper,
  ClearFilter,
  ClearIcon,
  ClearText,
  FilterTextContent,
} from './RepoFilter.styles';
import { useRepoFilterStore } from '../../hooks/stores';
import { Text, useWindowDimensions } from 'react-native';

const modifyFilterTypeText = (filterText = 'test') => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace('s', 'ed');
    } else {
      filterText = filterText.replace('s', '');
    }
  }
  return filterText;
};

interface FilterTextProps {
  filteredRepoCount: number;
}

const FilterText = ({ filteredRepoCount }: FilterTextProps) => {
  const { width } = useWindowDimensions();
  const { filterType, language, search, sortBy, setFilterType, setLanguage } = useRepoFilterStore();

  const clearFilters = () => {
    setFilterType(defaultFilterType);
    setLanguage(defaultLanguage);
  };

  return (
    <FilterTextWrapper>
      <FilterTextContent>
        <Text style={{ alignItems: 'baseline' }}>
          <Text style={{ fontWeight: '700' }}>{filteredRepoCount}</Text> results for
          {filterType && filterType !== defaultFilterType && (
            <Text style={{ fontWeight: '700' }}>{modifyFilterTypeText(filterType)}</Text>
          )}{' '}
          repositories
          {search && (
            <Text>
              matching <Text style={{ fontWeight: '700' }}> {search} </Text>
            </Text>
          )}{' '}
          {language && language !== defaultLanguage && (
            <Text>
              written in
              <Text style={{ fontWeight: '700' }}> {language} </Text>
            </Text>
          )}{' '}
          <Text>
            sorted by
            <Text style={{ fontWeight: '700' }}>{' ' + sortBy}</Text>
          </Text>
        </Text>
      </FilterTextContent>
      <ClearFilter onPress={() => clearFilters()}>
        <ClearIcon>
          <CloseIcon color="#FFF" />
        </ClearIcon>
        <ClearText screenWidth={width}>Clear filter</ClearText>
      </ClearFilter>
    </FilterTextWrapper>
  );
};

export default FilterText;
