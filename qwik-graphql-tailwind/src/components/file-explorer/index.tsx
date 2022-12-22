import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';
import { FolderIcon, DocumentIcon } from '~/components/icons';
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
  const backLink = `${basePath}/tree/${branch || pathBranch}/${path || ''}`;

  if (store.isLoading) {
    return <div />;
  }

  return (
    <>
      <BranchNavigation branch={pathBranch || branch} />
      <div class="border rounded border-gray-300 text-sm">
        {path && (
          <a href={backLink}>
            <a class="block py-2 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
              <div class="text-blue-600">..</div>
            </a>
          </a>
        )}
        {store?.tree?.map((item) => (
          <div key={item.path} class="py-2 px-4 border-b border-gray-300 last-of-type:border-none hover:bg-gray-50">
            <div class="flex items-center">
              <div class="mr-2.5">
                {item.type === 'tree' ? (
                  <FolderIcon className="w-5 h-5 text-blue-400" />
                ) : (
                  <DocumentIcon className="w-5 h-5 text-gray-500" />
                )}
              </div>
              <a href={`${basePath}/${item.type}/${branch || pathBranch}/${item.path}`}>
                <span class="hover:text-blue-600 hover:underline">{item.name}</span>
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
