import type { GistItem } from './types';
interface File {
  name: string;
}

export function parseQuery(repos: any[]): GistItem[] {
  return repos.reduce((acc: GistItem[], gist) => {
    if (!gist) {
      return acc;
    }
    const files = gist.files ?? [];
    const gists = files.reduce(
      (_acc: GistItem[], file: File) =>
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
