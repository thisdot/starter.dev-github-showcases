import { Repo } from '../types/user-repos-type';
import { repoDataFilteredBySearch } from './searchFunction';
import { useRepoFilterStore } from '../hooks/stores';

const useRepoSortFilter = (repos: Repo[]): {result: Repo[]} => {
  const { search } = useRepoFilterStore();

  let result = repos;

  if (search) {
    result = repoDataFilteredBySearch(result);
  }

  return {result};
};

export default useRepoSortFilter;
