import { Repo } from '~/types/user-repo-type';
import { search } from '../components/RepoFilter/RepoFilter.store';
import { repoDataFilteredBySearch } from './searchFunction';

const useRepoSortFilter = (repos: Repo[]) => {
  let result = repos;
  if (search()) {
    result = repoDataFilteredBySearch(result);
  }
  return [result];
};

export default useRepoSortFilter;
