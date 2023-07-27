export function parseQueryData(fileTree) {
  const items =
    fileTree?.map(({ name, path, type }) => {
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
