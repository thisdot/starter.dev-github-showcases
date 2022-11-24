import FetchApi from './api';
import { useAuth } from '../auth';
import { USER_GISTS_QUERY } from './queries/gists';

const getGists = async ({ url }) => {
  const { authStore } = useAuth();

  const data = {
    url,
    query: USER_GISTS_QUERY,
    variables: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);
  const gists = resp.viewer.gists.nodes?.reduce((acc, gist) => {
    if (!gist) {
      return acc;
    }
    const files = gist.files ?? [];
    const gists = files.reduce(
      (_acc, file) =>
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

  return gists;
};

export default getGists;
