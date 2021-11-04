import type { Blob } from '@lib/github';
import { useRepoFileQuery } from '@lib/github';
import gqlClient from '@lib/gqlClient';
import FileViewerView from './FileViewer.view';

interface FileViewerProps {
  repo: string;
  owner: string;
  branch: string;
  path: string | string[];
}

function FileExplorerFile({ repo, owner, branch, path }: FileViewerProps) {
  const formattedPath = Array.isArray(path) ? path.join('/') : path;
  const expression = `${branch}:${formattedPath}`;

  const { data, error, isLoading } = useRepoFileQuery(gqlClient, {
    owner,
    name: repo,
    path: expression,
  });

  const file = data?.repository?.blob as Blob | undefined;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !file) {
    return (
      <div>
        {error instanceof Error
          ? error.message
          : 'Failed to fetch repository contents'}
      </div>
    );
  }

  return <FileViewerView file={file} />;
}

export default FileExplorerFile;
