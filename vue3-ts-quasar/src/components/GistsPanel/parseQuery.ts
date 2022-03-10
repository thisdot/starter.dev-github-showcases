import type { GistItem } from '../../composables/github/types';

interface UserGistsQuery {
  viewer: { gists: { nodes: any[] } };
}

export function parseQuery(data: UserGistsQuery) {
  return data.viewer.gists.nodes?.reduce((acc: GistItem[], gist) => {
    if (!gist) {
      return acc;
    }
    const files = gist.files ?? [];
    const gists = files.reduce(
      (_acc: GistItem[], file) =>
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
      [],
    );
    return [...acc, ...gists];
  }, []);
}
