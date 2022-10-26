import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { TOP_REPOS_QUERY } from '~/utils/queries/top-repos-query';
import { useQuery } from '~/utils/useQuery';

interface RepoStore {
  data: any[];
}

export default component$(() => {
  const store = useStore<RepoStore>({
    data: [],
  });

  useClientEffect$(async () => {
    const response = await fetchTopRepos();

    updateTopRepos(store, response);
  });

  return <div>There will be repos!</div>;
});

export function updateTopRepos(store: RepoStore, response: any) {
  const {
    data: {
      viewer: {
        topRepositories: { nodes },
      },
    },
  } = response;
  store.data = nodes;
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
