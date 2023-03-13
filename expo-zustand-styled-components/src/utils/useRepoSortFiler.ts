import { FilterType, SortByType } from '../hooks/stores/useRepoFilterStore';
import { Repo } from '../types/user-repos-type';
import { getLanguages } from './getLanguages';
import { repoDataFilteredByLanguage } from './languageFilterFunction';
import { repoDataFilteredBySearch } from './searchFunction';
import { sortedRepoData } from './sortRepoFunction';
import { repoDataFilteredByType } from './typeFilterFunction';

const useRepoSortFilter = (repos: Repo[], search: string, filterType: FilterType, sortBy: SortByType, language: string) => {
  const languages = getLanguages(repos);
  let result = repos;

  if (search) {
    result = repoDataFilteredBySearch(result, search);
  }

  if (filterType) {
    result = repoDataFilteredByType(result, filterType);
  }

  if (sortBy) {
    result = sortedRepoData(result, sortBy);
  }

  if (language) {
    result = repoDataFilteredByLanguage(result, language);
  }

  return {result, languages}
};

export default useRepoSortFilter;
