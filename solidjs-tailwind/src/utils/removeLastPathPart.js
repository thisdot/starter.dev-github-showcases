export function removeLastPathPart(path) {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
}
