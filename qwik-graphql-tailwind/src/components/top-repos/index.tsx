import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { TOP_REPOS_QUERY } from '~/utils/queries/top-repos-query';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '~/utils/constants';
import { useQuery } from '~/utils/useQuery';
import { parseQuery } from './parseQuery';
import { TopRepo } from './types';
import { LoadingPulseDot } from '../Loading/loading-pulse-dot';
import { TopReposListItems } from './top-repos-card';

interface RepoStore {
  login: '';
  data: TopRepo[];
  isLoading: boolean;
}
export const TopRepos = component$(() => {
  const store = useStore<RepoStore>({
    login: '',
    data: [],
    isLoading: true,
  });

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const response = await fetchTopRepos(abortController);
    updateTopRepos(store, response);
  });

  return (
    <div class="p-12">
      <h2 data-testid="show repo list" class="text-lg font-medium mb-4">
        Top Repositories
      </h2>
      {store.isLoading ? <LoadingPulseDot /> : <TopReposListItems repos={store.data} login={store.login} />}
    </div>
  );
});

export function updateTopRepos(store: RepoStore, response: any) {
  const {
    data: {
      viewer: {
        login,
        topRepositories: { nodes },
      },
    },
  } = response;
  store.login = login;
  store.data = parseQuery(nodes);
  store.isLoading = false;
}

export async function fetchTopRepos(abortController?: AbortController) {
  const { executeQuery$ } = useQuery(TOP_REPOS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
