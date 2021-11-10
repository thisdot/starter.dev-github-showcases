import type { Blob } from '@lib/github';
import { useRepoFileQuery } from '@lib/github';
import gqlClient from '@lib/gqlClient';
import { parseError } from '@lib/parseError';
import { useRepo } from '@context/RepoContext';
import FileViewerView from './FileViewer.view';
import { mapExtensionToLanguage } from './mapExtensionToLanguage';

function FileViewer() {
  const { owner, name, branch, path, isRepoLoading } = useRepo();

  const {
    data,
    error: queryError,
    isLoading,
  } = useRepoFileQuery(gqlClient, {
    owner,
    name,
    expression: `${branch}:${path}`,
  });

  // wait on base repo data to display file
  if (isRepoLoading) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const file = data?.repository?.blob as Blob | undefined;

  // errors are handled at the repo page level
  const error = parseError(queryError);
  if (error || !file) {
    const err = error ? error : new Error('Repository path not found');
    throw err;
  }

  const extension = path.split('.').pop();
  const language = mapExtensionToLanguage(extension);
  const text = file.text ? file.text : '';
  const lines = text.split('\n').length;

  return (
    <FileViewerView
      text={text}
      byteSize={file.byteSize}
      lines={lines}
      language={language}
    />
  );
}

export default FileViewer;
