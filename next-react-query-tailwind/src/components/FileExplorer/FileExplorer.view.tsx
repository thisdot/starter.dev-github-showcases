import type { ExplorerItem } from './types';
import Link from 'next/link';
import { removeLastPathPart } from '@lib/pathUtils';
import { FolderIcon } from '@heroicons/react/24/solid';
import { DocumentIcon } from '@heroicons/react/24/outline';
import styles from './FileExplorer.module.css';

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
  // get a proper go back path based on repo file path
  const backPath = removeLastPathPart(repoPath);
  const backLink = `${basePath}/tree/${branch}/${backPath}`;

  return (
    <div className={styles.container}>
      {repoPath && (
        <Link href={backLink} className={styles.cellBack}>
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
              href={`${basePath}/${item.type}/${branch}/${item.path}`}
              data-testid={`file explorer list ${item.name}`}
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
