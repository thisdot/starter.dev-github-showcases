import { Repo } from '~/types/user-repo-type';
import {
  filterType,
  search,
  sortBy,
  language,
} from '../components/RepoFilter/RepoFilter.store';
import { repoDataFilteredBySearch } from './searchFunction';
import { repoDataFilteredByLanguage } from './languageFilterFunction';
import { getLanguages } from './getLanguages';
import { repoDataFilteredByType } from './typeFilterFunction';
import { sortedRepoData } from './sortRepoFunction';

const useRepoSortFilter = (repos: Repo[]): [Repo[], string[]] => {
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
