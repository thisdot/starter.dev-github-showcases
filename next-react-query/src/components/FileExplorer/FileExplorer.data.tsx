import cn from 'classnames';
import ContentLoader from 'react-content-loader';
import gqlClient from '@lib/gqlClient';
import { useRepoTreeQuery } from '@lib/github';
import { parseError } from '@lib/parseError';
import { useRepo } from '@context/RepoContext';
import { parseQueryData } from './parseQueryData';
import FileExplorerView from './FileExplorer.view';
import styles from './FileExplorer.module.css';

function FileExplorer() {
  const { owner, name, branch, path, isRepoLoading } = useRepo();
  const {
    data,
    error: queryError,
    isLoading,
  } = useRepoTreeQuery(gqlClient, {
    owner,
    name,
    expression: `${branch}:${path}`,
  });

  // wait on base repo data to display dir contents
  if (isRepoLoading) {
    return null;
  }

  if (isLoading) {
    return (
      <div className={cn(styles.container, 'py-2')}>
        <ContentLoader
          speed={2}
          width={400}
          height={28}
          viewBox="-10 5 400 28"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="10" cy="20" r="8" />
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>
      </div>
    );
  }

  // errors are handled at the repo page level
  const error = parseError(queryError);
  if (error || !data?.repository?.tree) {
    const err = error ? error : new Error('Repository path not found');
    throw err;
  }

  const items = parseQueryData(data);

  return (
    <FileExplorerView
      items={items}
      branch={branch}
      basePath={`/${owner}/${name}`}
      repoPath={path}
    />
  );
}

export default FileExplorer;
