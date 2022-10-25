import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { useQuery } from '~/utils/useQuery';

export const TOP_REPOS = `
query UserTopRepos {
  viewer {
    id
    login
    topRepositories(
      first: 20
      orderBy: { field: STARGAZERS, direction: DESC }
    ) {
      nodes {
        id
        name
        description
        owner {
          login
        }
        primaryLanguage {
          name
          color
        }
        isPrivate
        stargazerCount
        forkCount
        updatedAt
      }
    }
  }
}
`;

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
  const { executeQuery$ } = useQuery(TOP_REPOS);

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
