import { component$, useClientEffect$, useContext } from '@builder.io/qwik';
import { useQuery } from '~/utils/useQuery';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { REPO_TREE_QUERY } from '~/utils/queries/repo-tree';
import { RepoContext, SharedState } from '~/routes/[owner]/[name]';
import { FileExplorer } from '~/components/file-explorer';

export const RepoTree = component$(() => {
  const store = useContext(RepoContext);

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const response = await fetchRepoTree(
      {
        owner: store.owner,
        name: store.name,
        expression: `${store.branch}:${store.path}`,
      },
      abortController
    );

    updateRepoTree(store, response);
  });

  if (store.tree.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <FileExplorer />
      <pre>{JSON.stringify(store.tree.data, null, 2)}</pre>
    </div>
  );
});

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
  store.tree.isLoading = false;
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
