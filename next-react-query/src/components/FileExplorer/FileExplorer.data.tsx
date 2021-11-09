import cn from 'classnames';
import gqlClient from '@lib/gqlClient';
import { useRepoTreeQuery } from '@lib/github';
import { parseError } from '@lib/parseError';
import { useRepo } from '@context/RepoContext';
import { LoadingPulseDots } from '@components/Loading';
import { parseQueryData } from './parseQueryData';
import FileExplorerView from './FileExplorer.view';
import styles from './FileExplorer.module.css';

const containerClassName = cn(styles.container, 'p-4');

function FileExplorer() {
  const { owner, name, branch, path } = useRepo();
  const {
    data,
    error: queryError,
    isLoading,
  } = useRepoTreeQuery(gqlClient, {
    owner,
    name,
    expression: `${branch}:${path}`,
  });

  const error = parseError(queryError);
  const items = parseQueryData(data);

  if (error) {
    return <div className={containerClassName}>Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className={containerClassName}>
        <LoadingPulseDots />
      </div>
    );
  }

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
