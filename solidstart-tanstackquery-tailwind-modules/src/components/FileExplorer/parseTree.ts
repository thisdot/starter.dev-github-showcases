import { TreeProps } from '~/types/repo-tree-type';

export const parseQueryData = (fileTree: TreeProps[]) => {
  const items =
    fileTree?.map(({ path, ...rest }) => {
      return {
        ...rest,
        path: path ?? '',
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
