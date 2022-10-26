import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPOS_QUERY } from '~/utils/queries/repos-query';
import { TOP_REPOS_QUERY } from '~/utils/queries/top-repos-query';
import { useQuery } from '~/utils/useQuery';
import { Repo } from './types';

interface RepoStore {
  data: Repo[];
}

export default component$(() => {
  const store = useStore<RepoStore>({
    data: [],
  });

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const responseTopRepos = await fetchTopRepos(abortController);
    const responseUserRepos = await fetchUserRepos(abortController);

    updateTopRepos(store, responseTopRepos);
    updateUserRepos(store, responseUserRepos);
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

export function updateUserRepos(store: RepoStore, response: any) {
  const {
    data: {
      user: {
        repositories: { nodes },
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

export async function fetchUserRepos(abortController?: AbortController): Promise<any> {
  const { executeQuery$ } = useQuery(REPOS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    variables: {
      username: 'SDaian',
      first: 25,
    },
  });

  return await resp.json();
}
