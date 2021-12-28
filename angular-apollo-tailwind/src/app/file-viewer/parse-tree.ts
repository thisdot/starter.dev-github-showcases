import { TreeEntry, RepoTree as Tree } from '../gql';

export const parseTree = (tree: Tree) => {
  const items: TreeEntry[] =
    tree.entries.map(({ name, path, type }) => {
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
};
