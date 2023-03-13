import { Repo } from '../types/user-repos-type';
import { repoDataFilteredBySearch } from './searchFunction';
import { useRepoFilterStore, useUserReposStore } from '../hooks/stores';

const useRepoSortFilter = (repos: Repo[]) => {
  const { search } = useRepoFilterStore();

  if (search) {
    useUserReposStore.setState({ isLoading: false, userRepos: repoDataFilteredBySearch(repos) });
  }

};

export default useRepoSortFilter;
