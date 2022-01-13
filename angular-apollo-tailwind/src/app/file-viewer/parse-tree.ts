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

/**
 * Gets the exact name of the README file use in a repo.
 * Sometimes the README file is spelled differently so getting the raw name is best
 * before markdown.
 *
 * @param items list of files
 * @returns README file name
 */
export const getReadMeFileName = (items: TreeEntry[]): string => {
  const file = items.filter(({ name }) => /^(README.md)$/i.test(name))[0];
  return file?.name || '';
};
