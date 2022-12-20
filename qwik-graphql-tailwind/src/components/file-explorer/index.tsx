import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';
import { FolderIcon, DocumentIcon } from '~/components/icons';
import * as styles from './file-explorer.classNames';
import { useLocation } from '@builder.io/qwik-city';
import { useQuery } from '~/utils';
import { REPO_TREE_QUERY } from '~/utils/queries/repo-tree';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { parseQueryData } from './parseTree';
import { BranchNavigation } from '../branch-navigation';

export interface TreeState {
  isLoading: boolean;
  branches: { name: string }[];
  tree: { name: string; type: string; path: string }[];
}

export const FileExplorer = component$(({ branch }: { branch?: string }) => {
  const { path, name, owner, branch: pathBranch } = useLocation().params;

  const store = useStore<TreeState>(
    {
      tree: [],
      branches: [],
      isLoading: true,
    },
    { recursive: true }
  );

  useClientEffect$(async () => {
    const abortController = new AbortController();

    const response = await fetchRepoTree(
      {
        owner,
        name,
        expression: `${pathBranch || branch}:${path?.replace(/\/+$/, '') || ''}`,
      },
      abortController
    );
    updateRepoTree(store, response);
  });

  const basePath = `/${owner}/${name}`;
  const backLink = `${basePath}/tree/${branch}/${path || ''}`;

  if (store.isLoading) {
    return <div />;
  }

  return (
    <>
      <BranchNavigation branch={pathBranch || branch} />
      <div class={styles.container}>
        {path && (
          <a href={backLink}>
            <span class={styles.cellBack}>
              <div class="text-blue-600">..</div>
            </span>
          </a>
        )}
        {store.tree?.map((item) => (
          <div key={item.path} class={styles.cell}>
            <div class="flex items-center">
              <div class="mr-2.5">
                {item.type === 'tree' ? (
                  <FolderIcon className={styles.iconDir} />
                ) : (
                  <DocumentIcon className={styles.iconFile} />
                )}
              </div>
              <a href={`${basePath}/${item.type}/${pathBranch || branch}/${item.path}`}>
                <span class={styles.link}>{item.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

export function updateRepoTree(store: TreeState, response: any) {
  const {
    data: { repository },
  } = response;
  store.isLoading = false;
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
