import { Repo } from '~/types/user-repo-type';
import { filterType, search, sortBy } from '../components/RepoFilter/RepoFilter.store';
import { repoDataFilteredBySearch } from './searchFunction';
import { repoDataFilteredByType } from './typeFilterFunction';
import { sortedRepoData } from './sortRepoFunction';

const useRepoSortFilter = (repos: Repo[]) => {
  let result = repos;
  if (search()) {
    result = repoDataFilteredBySearch(result);
  }
  if (filterType()) {
    result = repoDataFilteredByType(result);
  }
  if (sortBy()) {
    result = sortedRepoData(result);
  }
  return [result];
};

export default useRepoSortFilter;
