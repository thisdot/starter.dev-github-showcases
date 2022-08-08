import type { ExplorerItem } from './types';
import { Link } from '@remix-run/react';
import { removeLastPathPart } from '../../../lib/pathUtils';
import { FolderIcon } from '@heroicons/react/solid';
import { DocumentIcon } from '@heroicons/react/outline';
import * as styles from './FileExplorer.classNames';

interface FileExplorerViewProps {
  items: ExplorerItem[];
  branch: string;
  basePath: string;
  repoPath: string;
}

function FileExplorerView({
  items,
  branch,
  basePath,
  repoPath,
}: FileExplorerViewProps) {
  const backPath = removeLastPathPart(repoPath);
  const backLink = `${basePath}/tree/${branch}/${backPath}`;
  return (
    <div className={styles.container}>
      {repoPath && (
        <Link to={backLink} className={styles.cellBack}>
          <div className="text-blue-600">..</div>
        </Link>
      )}
      {items.map((item) => (
        <div key={item.path} className={styles.cell}>
          <div className="flex items-center">
            <div className="mr-2.5">
              {item.type === 'tree' ? (
                <FolderIcon className={styles.iconDir} />
              ) : (
                <DocumentIcon className={styles.iconFile} />
              )}
            </div>
            <Link
              to={`${basePath}/${item.type}/${branch}/${item.path}`}
              className={styles.link}
            >
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FileExplorerView;
