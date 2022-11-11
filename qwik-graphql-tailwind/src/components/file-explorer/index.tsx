import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]';
import { FolderIcon, DocumentIcon } from '~/components/icons';
import * as styles from './file-explorer.classNames';

// A special "period" character https://www.compart.com/en/unicode/U+2024 we use to bypass the dynamic routing issue https://github.com/BuilderIO/qwik/issues/1940
// When we fetch the file based on the route parameter in the blob detail, we might have to replace the special period back with regular period character
export const SPECIAL_PERIOD_CHAR = '․';

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
      {data?.tree.map((item) => (
        <div key={item.path} className={styles.cell}>
          <div className="flex items-center">
            <div className="mr-2.5">
              {item.type === 'tree' ? (
                <FolderIcon className={styles.iconDir} />
              ) : (
                <DocumentIcon className={styles.iconFile} />
              )}
            </div>
            <a href={`${basePath}/${item.type}/${branch}/${item.path.replace(/\./g, SPECIAL_PERIOD_CHAR)}`}>
              <a className={styles.link}>{item.name}</a>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
