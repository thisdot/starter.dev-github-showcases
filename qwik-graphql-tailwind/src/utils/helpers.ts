export const cleanUpParams = (params: Record<string, string>) => {
  if ('path' in params && params.path[params.path.length - 1] === '/') {
    params.path = params.path.slice(0, params.path.length - 1);
  }
  return params;
};
