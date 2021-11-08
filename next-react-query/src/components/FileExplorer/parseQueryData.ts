import type { RepoTreeQuery, TreeEntry, Tree } from '@lib/github';
import type { ExplorerItem } from './types';

export function parseQueryData(data?: RepoTreeQuery) {
  const fileTree = data?.repository?.tree as Tree | undefined;
  const items: ExplorerItem[] =
    fileTree?.entries?.map(({ name, path, type }: TreeEntry) => {
      return {
        name,
        path: path ?? '',
        type,
      };
    }) ?? [];
  return items.sort((a, b) => {
    if (a.type === 'tree' && b.type !== 'tree') {
      return -1;
    }
    if (a.type !== 'tree' && b.type === 'tree') {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
}
