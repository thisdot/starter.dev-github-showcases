import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { FileExplorer } from '~/components/file-explorer';
import { parseQueryData } from '~/components/file-explorer/parseTree';
import { useQuery } from '~/utils';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { cleanUpParams } from '~/utils/helpers';
import { REPO_TREE_QUERY } from '~/utils/queries/repo-tree';

interface IState {
  branches: { name: string }[];
  tree: { name: string; type: string; path: string }[];
}

export default component$(() => {
  const location = useLocation();
  const store = useStore<IState>(
    {
      branches: [],
      tree: [],
    },
    { recursive: true }
  );

  useClientEffect$(async ({ track }) => {
    track(() => location.params);
    const { owner, name, path, branch } = cleanUpParams(location.params);
    const abortController = new AbortController();
    if (owner && name) {
      const response = await fetchRepoTree(
        {
          owner,
          name,
          expression: `${branch}:${path?.replace(/\/+$/, '') || ''}`,
        },
        abortController
      );
      updateRepoTree(store, response);
    }
  });

  return (
    <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">{store.tree && <FileExplorer tree={store.tree} />}</div>
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
