import { component$, useClientEffect$, useContextProvider, useStore, createContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL, SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX } from '~/utils/constants';
import { REPO_INFO_QUERY } from '~/utils/queries/repo-info';
import { parseTopics } from './parseTopics';
import { RepoTree } from '~/components/repo-tree';
import { RepoReadMe } from '~/components/repo-read-me';
import { RepoAboutWidget } from '~/components/repo-about';
import { BranchNavigation } from '~/components/branch-navigation';
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
  readme: {
    error?: string;
    text?: any;
    isLoading: boolean;
  };
}

export const RepoContext = createContext<SharedState>('repo-context');

export default component$(() => {
  const store = useStore<SharedState>(
    {
      branch: 'HEAD',
      owner: '',
      name: '',
      info: {
        isLoading: true,
      },
      tree: {
        isLoading: true,
      },
      readme: {
        isLoading: true,
      },
    },
    { recursive: true }
  );

  const { path, name, owner } = useLocation().params;

  const _owner = owner?.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');
  const _name = name?.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.');
  const _path = path?.replace(SPECIAL_PERIOD_CHAR_URL_ENCODED_REGEX, '.') || '';

  const isOwnerAndNameValid = typeof owner === 'string' && typeof name === 'string';

  useClientEffect$(async () => {
    const abortController = new AbortController();
    store.owner = _owner;
    store.name = _name;
    store.path = _path;
    const response = await fetchRepoInfo(
      isOwnerAndNameValid
        ? {
            owner: _owner,
            name: _name,
          }
        : {
            owner: '',
            name: '',
          },
      abortController
    );
    updateRepoInfo(store, response);
  });

  if (store.info.isLoading && store.tree.isLoading) {
    return <div>Loading...</div>;
  }

  useContextProvider(RepoContext, store);

  return (
    <div className="bg-white h-screen">
      <RepoHeader
        name={_name}
        owner={_owner}
        forkCount={store.info.data?.forkCount || 0}
        watcherCount={store.info.data?.watcherCount || 0}
        stargazerCount={store.info.data?.stargazerCount || 0}
        issuesCount={store.info.data?.openIssueCount || 0}
        prCount={store.info.data?.openPullRequestCount || 0}
      />
      <div className="max-w-screen-2xl mx-auto md:py-8 px-4 bg-white">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 xl:col-span-9">
            <BranchNavigation name={_name} owner={_owner} path={_path || ''} branch={store.branch} />
            <RepoTree />
            <RepoReadMe />
          </div>
          <div className="col-span-12 md:col-span-5 xl:col-span-3">
            <RepoAboutWidget />
          </div>
        </div>
      </div>
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
