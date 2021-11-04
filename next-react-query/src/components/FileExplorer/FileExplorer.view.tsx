import type { ExplorerItem } from './types';
import Link from 'next/link';
import { removeLastPathPart } from '@lib/pathUtils';
import { FolderIcon } from '@heroicons/react/solid';
import { DocumentIcon } from '@heroicons/react/outline';

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
    <div className="border rounded border-gray-200 text-sm">
      {repoPath && (
        <Link href={backLink}>
          <a className="block py-2 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
            <div className="text-blue-600">..</div>
          </a>
        </Link>
      )}
      {items.map((item) => (
        <div
          key={item.path}
          className="py-2 px-4 border-b border-gray-200 last-of-type:border-none hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div className="mr-2.5">
              {item.type === 'tree' ? (
                <FolderIcon className="w-5 h-5 text-blue-400" />
              ) : (
                <DocumentIcon className="w-5 h-5 text-gray-500" />
              )}
            </div>
            <Link href={`${basePath}/${item.type}/${branch}/${item.path}`}>
              <a className="hover:text-blue-600 hover:underline">{item.name}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FileExplorerView;
