import { RepoTreeQuery, Tree, TreeEntry } from '../gql/github.schema';

export const parseTree = (data?: RepoTreeQuery): TreeEntry[] => {
  const fileTree = data?.repository?.tree as Tree | undefined;
  const items: TreeEntry[] =
    fileTree?.entries?.map(
      ({ name, path, type, isGenerated, mode, oid, repository }: TreeEntry) => {
        return {
          name,
          path: path ?? '',
          type,
          isGenerated,
          mode,
          oid,
          repository,
        };
      },
    ) ?? [];
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
