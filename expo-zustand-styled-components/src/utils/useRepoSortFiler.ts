import { Repo } from '../types/user-repos-type';
import { repoDataFilteredBySearch } from './searchFunction';

const useRepoSortFilter = (repos: Repo[], search: string) => {
  let result = repos;

  if (search) {
    result = repoDataFilteredBySearch(result, search);
  }

  return {result}
};

export default useRepoSortFilter;
