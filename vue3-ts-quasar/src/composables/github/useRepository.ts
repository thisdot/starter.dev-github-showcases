import { useQuery, useResult } from '@vue/apollo-composable';
import { Ref } from 'vue';

import { USER_TOP_REPOS_QUERY } from './queries';
import { UserTopReposData } from './types';

interface UseRepository {
  getTopRepositories: () => {
    data: Ref<UserTopReposData | null>;
    loading: Ref<boolean>;
  };
}

export const useRepository = (): UseRepository => {
  /** Get all github repositories belonging to the currently logged in user.
   * By default fetches the first 10 (these are our top repositories)
   */
  const getTopRepositories = () => {
    const { result, loading } = useQuery(USER_TOP_REPOS_QUERY);

    const data = useResult(result, [], ({ viewer }) => ({
      ...viewer,
      topRepositories: viewer.topRepositories.nodes?.filter((v) => v),
    }));

    return { data: data as Ref<UserTopReposData | null>, loading };
  };

  return { getTopRepositories };
};
