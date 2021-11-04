import type { Blob, Tree, TreeEntry } from '@lib/github';
import type { ExplorerItem } from './types';
import gqlClient from '@lib/gqlClient';
import { useRepoTreeQuery } from '@lib/github';
import { parseApiError } from '@lib/parseApiError';
import FileExplorerView from './FileExplorer.view';

interface FileExplorerProps {
  repo: string;
  owner: string;
  branch?: string;
  path?: string | string[];
}

function FileExplorer({ repo, owner, branch, path = '' }: FileExplorerProps) {
  const formattedPath = Array.isArray(path) ? path.join('/') : path;
  const expression = branch
    ? `${branch}:${formattedPath}`
    : `HEAD:${formattedPath}`;
  const { data, error, isLoading } = useRepoTreeQuery(gqlClient, {
    owner,
    name: repo,
    path: expression,
  });

  const defaultBranch = data?.repository?.defaultBranchRef?.name;
  const fileTree = data?.repository?.tree as Tree | undefined;
  const items: ExplorerItem[] =
    fileTree?.entries?.map(({ name, path, type, object }: TreeEntry) => {
      const file = object ? (object as Blob) : undefined;
      return {
        name,
        path: path ?? '',
        type,
        text: file?.text,
        byteSize: file?.byteSize,
      };
    }) ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    const message = parseApiError(error);
    return <div>Error: {message}</div>;
  }

  return (
    <FileExplorerView
      items={items}
      branch={branch ?? defaultBranch ?? 'HEAD'}
      basePath={`/${owner}/${repo}`}
      repoPath={formattedPath}
    />
  );
}

export default FileExplorer;
