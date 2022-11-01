import { component$, useClientEffect$, useContextProvider, useStore, createContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPO_INFO_QUERY } from '~/utils/queries/repo-info';
import { parseTopics } from './parseTopics';
import { RepoTree } from '~/components/repo-tree';

export interface SharedState {
  name: string;
  owner: string;
  branch?: string;
  path?: string;
  info: {
    error?: string;
    data?: {
      isPrivate: boolean;
      stargazerCount: number;
      forkCount: number;
      watcherCount: number;
      openIssueCount: number;
      openPullRequestCount: number;
      description?: string | null;
      homepageUrl?: string | null;
      topics: string[];
      isOrg: boolean;
    };
    isLoading: boolean;
  };
  tree: {
    error?: string;
    data?: {
      branches: { name: string }[];
      tree: { name: string; type: string; path: string }[];
    };
    isLoading: boolean;
  };
  // readmeInfo: {
}

export const RepoContext = createContext<SharedState>('repo-context');

export default component$(() => {
  const store = useStore<SharedState>(
    {
      owner: '',
      name: '',
      info: {
        isLoading: true,
      },
      tree: {
        isLoading: true,
      },
    },
    { recursive: true }
  );

  const { params } = useLocation();

  const isOwnerAndNameValid = typeof params.owner === 'string' && typeof params.name === 'string';
  const defaultBranch = typeof params.branch === 'string' ? params.branch : 'HEAD';

  useClientEffect$(async () => {
    store.owner = params.owner;
    store.name = params.name;
    store.branch = defaultBranch;
    store.path = params.path || '';
    const abortController = new AbortController();
    const response = await fetchRepoInfo(
      isOwnerAndNameValid
        ? {
            owner: params.owner,
            name: params.name,
          }
        : {
            owner: '',
            name: '',
          },
      abortController
    );

    updateRepoInfo(store, response);
  });

  if (store.info.isLoading) {
    return <div>Loading...</div>;
  }
  useContextProvider(RepoContext, store);
  return (
    <div>
      There will be repos info!({store.branch})
      <br />
      <pre>{JSON.stringify(store.info.data, null, 2)}</pre>
      <RepoTree />
    </div>
  );
});

export function updateRepoInfo(store: SharedState, response: any) {
  const {
    data: { repository },
  } = response;
  if (repository) {
    store.info.data = {
      isPrivate: repository.isPrivate,
      forkCount: repository.forkCount,
      description: repository.description,
      homepageUrl: repository.homepageUrl,
      stargazerCount: repository.stargazerCount,
      watcherCount: repository.watchers.totalCount,
      openIssueCount: repository.issues.totalCount,
      topics: parseTopics(repository.topics?.nodes),
      isOrg: typeof repository.owner?.orgName === 'string',
      openPullRequestCount: repository.pullRequests.totalCount,
    };
    store.branch = repository?.defaultBranchRef?.name ?? store.branch;
  } else {
    store.info.data = undefined;
    store.info.error = 'No repository found';
  }
  store.info.isLoading = false;
}

export async function fetchRepoInfo(
  variables: {
    owner: string;
    name: string;
  },
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(REPO_INFO_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    variables,
  });

  return await resp.json();
}
