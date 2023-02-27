import { USER_GISTS_QUERY } from './queries/gists';
import FetchApi, { ApiProps } from './api';
import { Gists } from '../types/gists-type';

interface Response {
  data: {
    viewer: {
      gists: {
        nodes: Gists[];
      };
    };
  };
}

const getGists = async () => {
  const data: ApiProps<undefined> = {
    url: ``, // Missing URL
    query: USER_GISTS_QUERY,
    headersOptions: {
      authorization: `Bearer `, //Missing auth key
    },
  };

  const resp = (await FetchApi(data)) as Response;

  const gists = resp.data?.viewer.gists.nodes?.reduce(
    (acc: Gists[] | { name: string; url: string }[], gist) => {
      if (!gist) {
        return acc;
      }
      const files = gist.files ?? [];
      const gists = files.reduce(
        (_acc: { name: string; url: string }[], file) =>
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
    },
    []
  );

  return gists;
};

export default getGists;
