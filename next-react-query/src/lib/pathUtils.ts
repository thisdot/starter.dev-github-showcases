export function removeLastPathPart(path: string) {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
}

export function getBasePath(
  pathname: string,
  query: Record<string, string | string[] | undefined>
) {
  return pathname
    .replaceAll('[', '')
    .replaceAll(']', '')
    .split('/')
    .reduce(
      (acc, part) =>
        typeof query[part] !== 'string' ? acc : `${acc}/${query[part]}`,
      ''
    );
}
