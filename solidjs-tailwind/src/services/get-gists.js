import { gqlFetch } from '../helper/gqlFetch';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../helper/constants';
import { USER_GISTS_QUERY } from './queries/gists';

const getGists = async () => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: USER_GISTS_QUERY,
    variables: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await gqlFetch(data);
  const gists = resp.data?.viewer.gists.nodes?.reduce((acc, gist) => {
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
