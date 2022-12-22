import {
  search,
  language,
  filterType,
  sortBy,
} from '../components/RepoFilter/RepoFilter.store';
import { getLanguages } from './getLanguages';
import { repoDataFilteredByLanguage } from './languageFilterFunction';
import { repoDataFilteredBySearch } from './searchFunctionality';
import { sortedRepoData } from './sortRepoFunction';
import { repoDataFilteredByType } from './typeFilterFunction';

const useRepoSortFilter = (repos) => {
  const languages = getLanguages(repos);
  let result = repos;

  if (search()) {
    result = repoDataFilteredBySearch(result);
  }

  if (language()) {
    result = repoDataFilteredByLanguage(result);
  }

  if (filterType()) {
    result = repoDataFilteredByType(result);
  }

  if (sortBy()) {
    result = sortedRepoData(result);
  }

  return [result, languages];
};

export default useRepoSortFilter;
