import { Slot, useStore, component$, createContext, useClientEffect$, useContextProvider } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPO_INFO_QUERY } from '~/utils/queries/repo-info';
import { parseTopics } from './parseTopics';
import { REPO_README_QUERY } from '~/utils/queries/repo-read-me';
import { REPO_TREE_QUERY } from '~/utils/queries/repo-tree';
import { RepoLayout } from '~/components/repo-layout';

export interface SharedState {
  name: string;
  owner: string;
  branch: string;
  path?: string;
  isLoading: boolean;
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
  tree: {
    error?: string;
    data?: {
      branches: { name: string }[];
      tree: { name: string; type: string; path: string }[];
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
      tree: {},
      readme: {},
      branch: 'HEAD',
      isLoading: true,
    },
    { recursive: true }
  );

  const { path, name, owner } = useLocation().params;

  const isOwnerAndNameValid = typeof owner === 'string' && typeof name === 'string';

  useClientEffect$(async () => {
    const abortController = new AbortController();
    store.owner = owner;
    store.name = name;
    store.path = path || '';
    store.isLoading = true;
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

  useClientEffect$(async () => {
    store.isLoading = true;
    const abortController = new AbortController();
    const response = await fetchRepoReadMe(
      {
        owner: store.owner,
        name: store.name,
        expression: store.path ? `HEAD:${store.path}/README.md` : 'HEAD:README.md',
      },
      abortController
    );

    updateRepoReadMe(store, response);
  });

  useClientEffect$(async ({ track }) => {
    store.isLoading = true;
    const path = track(() => store.path);
    const abortController = new AbortController();
    const response = await fetchRepoTree(
      {
        owner: store.owner,
        name: store.name,
        expression: `${store.branch}:${path}`,
      },
      abortController
    );

    updateRepoTree(store, response);
  });

  useContextProvider(RepoContext, store);
  return (
    <div className="bg-white h-screen">
      <RepoLayout>
        <Slot />
      </RepoLayout>
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

export function updateRepoTree(store: SharedState, response: any) {
  const {
    data: { repository },
  } = response;
  if (repository) {
    store.tree.data = {
      branches: repository.branches?.nodes,
      tree: repository.tree?.entries,
    };
  } else {
    store.tree.data = undefined;
    store.tree.error = 'No found';
  }
  store.isLoading = false;
}

export async function fetchRepoTree(
  variables: {
    owner: string;
    name: string;
    expression: string;
  },
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(REPO_TREE_QUERY);

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
