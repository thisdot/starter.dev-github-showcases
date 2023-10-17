import { component$, useClientEffect$, useContext, useStore } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { RepoReadMe } from '~/components/repo-read-me';
import { RepoAboutWidget } from '~/components/repo-about';
import { useQuery } from '~/utils';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { cleanUpParams } from '~/utils/helpers';
import { FileExplorer } from '~/components/file-explorer';
import { RepoContext } from './layout-named';
import { parseQueryData } from '~/components/file-explorer/parseTree';
import { REPO_TREE_QUERY } from '~/utils/queries/repo-tree';
import { REPO_README_QUERY } from '~/utils/queries/repo-read-me';

interface IState {
  readme?: any;
  branches: { name: string }[];
  tree: { name: string; type: string; path: string }[];
}

export default component$(() => {
  const location = useLocation();
  const store = useContext(RepoContext);
  const store2 = useStore<IState>(
    {
      branches: [],
      tree: [],
    },
    { recursive: true }
  );

  useClientEffect$(async ({ track }) => {
    const { owner, name, path } = cleanUpParams(location.params);
    track(() => store.branch);
    const abortController = new AbortController();
    if (owner && name) {
      const response = await fetchRepoTree(
        {
          owner,
          name,
          expression: `${store.branch}:${path?.replace(/\/+$/, '') || ''}`,
        },
        abortController
      );
      updateRepoTree(store2, response);
    }
  });

  useClientEffect$(async () => {
    const { owner, name, path } = cleanUpParams(location.params);
    const abortController = new AbortController();
    const response = await fetchRepoReadMe(
      {
        owner,
        name,
        expression: path ? `HEAD:${path}/README.md` : 'HEAD:README.md',
      },
      abortController
    );
    updateRepoReadMe(store2, response);
  });

  if (!store2.tree.length) {
    return <div />;
  }

  return (
    <div class="max-w-screen-2xl mx-auto md:py-8 px-4 bg-white">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 md:col-span-7 xl:col-span-9">
          {store2.tree && <FileExplorer tree={store2.tree} />}
          <RepoReadMe readme={store2.readme} />
        </div>
        <div class="col-span-12 md:col-span-5 xl:col-span-3">
          <RepoAboutWidget />
        </div>
      </div>
    </div>
  );
});

export function updateRepoTree(store: IState, response: any) {
  const {
    data: { repository },
  } = response;
  store.branches = repository.branches?.nodes;
  store.tree = parseQueryData(repository.tree);
}

export async function fetchRepoTree(
  variables: {
    owner: string;
    name: string;
    expression: string;
  },
  abortController?: AbortController
) {
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

export function updateRepoReadMe(store: IState, response: any) {
  const {
    data: { repository },
  } = response;
  const readme = repository?.readme as Blob;
  store.readme = readme?.text ?? undefined;
}

export async function fetchRepoReadMe(
  variables: {
    owner: string;
    name: string;
    expression: string;
  },
  abortController?: AbortController
) {
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
