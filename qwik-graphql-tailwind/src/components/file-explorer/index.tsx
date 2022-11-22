import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]';
import { FolderIcon, DocumentIcon } from '~/components/icons';
import * as styles from './file-explorer.classNames';
import { SPECIAL_PERIOD_CHAR } from '~/utils/constants';

export const FileExplorer = component$(() => {
  const store = useContext(RepoContext);

  const {
    branch,
    owner,
    name,
    path: repoPath,
    tree: { data },
  } = store;
  const basePath = `/${owner}/${name}`;
  const backLink = `${basePath}/tree/${branch}/${repoPath}`;

  return (
    <div className={styles.container}>
      {repoPath && (
        <a href={backLink}>
          <a className={styles.cellBack}>
            <div className="text-blue-600">..</div>
          </a>
        </a>
      )}
      {data?.tree?.map((item) => (
        <div key={item.path} className={styles.cell}>
          <div className="flex items-center">
            <div className="mr-2.5">
              {item.type === 'tree' ? (
                <FolderIcon className={styles.iconDir} />
              ) : (
                <DocumentIcon className={styles.iconFile} />
              )}
            </div>
            <a
              href={`${basePath}/${item.type}/${branch}/${item.path.replace(/\./g, SPECIAL_PERIOD_CHAR)}?forkCount=${
                store.info.data?.forkCount || 0
              }&watcherCount=${store.info.data?.watcherCount || 0}&stargazerCount=${
                store.info.data?.stargazerCount || 0
              }&issuesCount=${store.info.data?.openIssueCount || 0}&prCount=${
                store.info.data?.openPullRequestCount || 0
              }`}
            >
              <span className={styles.link}>{item.name}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
