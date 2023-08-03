export interface ExplorerItem {
  name: string;
  path: string;
  type: string;
}

export function parseQueryData(fileTree?: any) {
  const items: ExplorerItem[] =
    fileTree?.entries?.map(({ name, path, type }: any) => {
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
