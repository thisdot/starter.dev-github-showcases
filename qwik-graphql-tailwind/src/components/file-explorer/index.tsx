import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { FolderIcon, DocumentIcon } from '~/components/icons';
import * as styles from './file-explorer.classNames';
import { Link } from '@builder.io/qwik-city';

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
        <Link href={backLink}>
          <Link className={styles.cellBack}>
            <div className="text-blue-600">..</div>
          </Link>
        </Link>
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
            <Link href={`${basePath}/${item.type}/${branch}/${item.path}`}>
              <span className={styles.link}>{item.name}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
});
