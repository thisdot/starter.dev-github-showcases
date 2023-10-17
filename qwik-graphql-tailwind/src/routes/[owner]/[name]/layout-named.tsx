import { Slot, useStore, component$, createContext, useClientEffect$, useContextProvider } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPO_INFO_QUERY } from '~/utils/queries/repo-info';
import { parseTopics } from './parseTopics';
import { RepoHeader } from '~/components/repo-header';
import { cleanUpParams } from '~/utils/helpers';

export interface SharedState {
  branch: string;
  isLoading: boolean;
  info: {
    isPrivate?: boolean;
    stargazerCount?: number;
    forkCount?: number;
    watcherCount?: number;
    openIssueCount?: number;
    openPullRequestCount?: number;
    description?: string | null;
    homepageUrl?: string | null;
    topics?: string[];
    isOrg?: boolean;
  };
}

export const RepoContext = createContext<SharedState>('repo-context');

export default component$(() => {
  const store = useStore<SharedState>(
    {
      info: {},
      branch: 'HEAD',
      isLoading: true,
    },
    { recursive: true }
  );
  const location = useLocation();
  useContextProvider(RepoContext, store);

  const isOwnerAndNameValid = typeof location.params?.owner === 'string' && typeof location.params?.name === 'string';

  useClientEffect$(async () => {
    const { owner, name } = cleanUpParams(location.params);
    const abortController = new AbortController();
    const response = await fetchRepoInfo(
      isOwnerAndNameValid
        ? {
            owner,
            name,
          }
        : {
            owner: '',
            name: '',
          },
      abortController
    );
    updateRepoInfo(store, response);
  });

  return (
    <div class="bg-white h-screen">
      {!store.isLoading ? <RepoHeader /> : <div>Loading...</div>}
      <Slot />
    </div>
  );
});

export function updateRepoInfo(store: SharedState, response: any) {
  const {
    data: { repository },
  } = response;
  if (repository) {
    store.info = {
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
    store.isLoading = false;
    store.branch = repository?.defaultBranchRef?.name ?? store.branch;
  }
}

export async function fetchRepoInfo(
  variables: {
    owner: string;
    name: string;
  },
  abortController?: AbortController
) {
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
