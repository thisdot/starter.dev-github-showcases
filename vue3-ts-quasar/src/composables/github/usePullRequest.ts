import { useQuery, useResult } from '@vue/apollo-composable';
import { Ref } from 'vue';
import { PULL_REQUEST_QUERY } from './queries';
import { PullRequest } from './types';

interface UsePullRequest {
  getPullRequests: (
    owner: string,
    name: string,
  ) => {
    data: Ref<PullRequest | null>;
    loading: Ref<boolean>;
  };
}

export const usePullRequest = (): UsePullRequest => {
  const getPullRequests = (owner: string, name: string) => {
    const { result, loading } = useQuery(PULL_REQUEST_QUERY, {
      owner,
      name,
      first: 10,
    });

    const data = useResult(result, [], ({ repository }) => ({
      ...repository,
    }));

    return { data: data as Ref<PullRequest | null>, loading };
  };

  return { getPullRequests };
};
