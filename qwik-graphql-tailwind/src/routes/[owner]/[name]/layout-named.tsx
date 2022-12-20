import { Slot, useStore, component$, createContext, useClientEffect$, useContextProvider } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPO_INFO_QUERY } from '~/utils/queries/repo-info';
import { parseTopics } from './parseTopics';
import { REPO_README_QUERY } from '~/utils/queries/repo-read-me';
import { RepoHeader } from '~/components/repo-header';

export interface SharedState {
  name: string;
  owner: string;
  branch: string;
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
  };
  readme: {
    error?: string;
    text?: any;
  };
}

export const RepoContext = createContext<SharedState>('repo-context');

export default component$(() => {
  const store = useStore<SharedState>(
    {
      info: {},
      name: '',
      owner: '',
      readme: {},
      branch: 'HEAD',
    },
    { recursive: true }
  );

  const { path, name, owner } = useLocation().params;

  const isOwnerAndNameValid = typeof owner === 'string' && typeof name === 'string';

  useClientEffect$(async ({ track }) => {
    store.owner = track(() => owner);
    store.name = track(() => name);
    store.path = track(() => path || '');

    const abortController = new AbortController();
    const response1 = await fetchRepoInfo(
      isOwnerAndNameValid
        ? {
            owner: store.owner,
            name: store.name,
          }
        : {
            owner: '',
            name: '',
          },
      abortController
    );
    updateRepoInfo(store, response1);

    const response2 = await fetchRepoReadMe(
      {
        owner: store.owner,
        name: store.name,
        expression: store.path ? `HEAD:${store.path}/README.md` : 'HEAD:README.md',
      },
      abortController
    );
    updateRepoReadMe(store, response2);
  });

  useContextProvider(RepoContext, store);
  return (
    <div class="bg-white h-screen">
      {store.info.data ? <RepoHeader /> : <div>Loading...</div>}
      <Slot />
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

export function updateRepoReadMe(store: SharedState, response: any) {
  const {
    data: { repository },
  } = response;
  if (repository) {
    const readme = repository.readme as Blob;
    store.readme.text = readme?.text ?? undefined;
  } else {
    store.readme.text = undefined;
  }
}

export async function fetchRepoReadMe(
  variables: {
    owner: string;
    name: string;
    expression: string;
  },
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(REPO_README_QUERY);

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
