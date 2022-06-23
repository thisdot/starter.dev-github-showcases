import type { GistItem } from "./types";

type GistDataGQL = {
  viewer: {
    gists: {
      nodes: GistNodeGQL[];
    };
  };
};
type GistNodeGQL = {
  id: string;
  description?: string;
  name: string;
  url: string;
  files?: {
    name: string;
  }[];
};
type GistFileGQL = { name: string };

export function parseQueryUserGists(data: GistDataGQL): GistItem[] {
  return (data.viewer.gists.nodes || [])
    .filter((gist: GistNodeGQL) => !!gist)
    .map((gist: GistNodeGQL) => {
      return (gist.files || [])
        .filter((file: GistFileGQL) => !!file)
        .map(
          (file: GistFileGQL): GistItem => ({
            id: gist.id,
            description: gist.description,
            name: file.name || gist.name,
            url: gist.url,
          })
        );
    })
    .flat();
}
