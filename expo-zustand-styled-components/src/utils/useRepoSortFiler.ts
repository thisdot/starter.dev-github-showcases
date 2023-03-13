import { FilterType } from '../hooks/stores/useRepoFilterStore';
import { Repo } from '../types/user-repos-type';
import { repoDataFilteredBySearch } from './searchFunction';
import { repoDataFilteredByType } from './typeFilterFunction';

const useRepoSortFilter = (repos: Repo[], search: string, filterType: FilterType) => {
  let result = repos;

  if (search) {
    result = repoDataFilteredBySearch(result, search);
  }

  if (filterType) {
    result = repoDataFilteredByType(result, filterType);
  }

  return {result}
};

export default useRepoSortFilter;
