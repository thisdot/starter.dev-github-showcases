export function removeLastPathPart(path: string) {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
}

export function removePathPart(path: string[], index: number) {
  return path.slice(0, index + 1).join('/');
}
