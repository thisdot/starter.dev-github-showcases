import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { TOP_REPOS_QUERY } from '~/utils/queries/top-repos-query';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import TopReposListItems from './top-repos-card';
import { useQuery } from '~/utils/useQuery';
import { parseQuery } from './parseQuery';
import { TopRepo } from './types';

interface RepoStore {
  login: '';
  data: TopRepo[];
  isLoading: boolean;
}

export default component$(() => {
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
    <div className="p-12">
      <h2 data-testid="show repo list" className="text-lg font-medium mb-4">
        Top Repositories
      </h2>
      {store.isLoading ? <div>Loading...</div> : <TopReposListItems repos={store.data} login={store.login} />}
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

export async function fetchTopRepos(abortController?: AbortController): Promise<any> {
  const { executeQuery$ } = useQuery(TOP_REPOS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  return await resp.json();
}