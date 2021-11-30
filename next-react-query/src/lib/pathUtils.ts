export function removeLastPathPart(path: string) {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
}
