import { useAuth } from '~/auth';
import { StoreProps } from '~/auth/AuthStore';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { USER_GISTS_QUERY } from './queries/gists';
import FetchApi, { ApiProps } from './api';
import { Gists } from '~/types/gists-type';

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
  const { authStore }: { authStore: StoreProps } = useAuth();
  const data: ApiProps<undefined> = {
    url: `${GITHUB_GRAPHQL}`,
    query: USER_GISTS_QUERY,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };

  const resp = (await FetchApi(data)) as Response;

  const gists = resp.data?.viewer.gists.nodes?.reduce((acc: any, gist) => {
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
