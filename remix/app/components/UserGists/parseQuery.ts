import type { GistItem } from './types';

export function parseQueryUserGists(data: any) {
  return data.viewer.gists.nodes?.reduce((acc: GistItem[], gist: any) => {
    if (!gist) {
      return acc;
    }
    const files = gist.files ?? [];
    const gists = files.reduce(
      (_acc: GistItem[], file: any) =>
        file
          ? [
              ..._acc,
              {
                id: gist.id,
                description: gist.description,
                name: file.name || gist.name,
                url: gist.url,
              },
            ]
          : acc,
      []
    );
    return [...acc, ...gists];
  }, []);
}
