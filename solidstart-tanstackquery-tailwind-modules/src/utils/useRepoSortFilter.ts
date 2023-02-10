import { Repo } from '~/types/user-repo-type';
import { filterType, search } from '../components/RepoFilter/RepoFilter.store';
import { repoDataFilteredBySearch } from './searchFunction';
import { repoDataFilteredByType } from './typeFilterFunction';

const useRepoSortFilter = (repos: Repo[]) => {
  let result = repos;
  if (search()) {
    result = repoDataFilteredBySearch(result);
  }
  if (filterType()) {
    result = repoDataFilteredByType(result);
  }
  return [result];
};

export default useRepoSortFilter;
