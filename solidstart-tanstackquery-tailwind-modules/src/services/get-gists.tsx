import { useAuth } from '~/auth';
import { StoreProps } from '~/auth/AuthStore';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { USER_GISTS_QUERY } from './queries/gists';
import FetchApi, { ApiProps } from './api';
import { Gists } from '~/types/gists-type';

interface Response {
  data: {
    gists: Gists[];
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
  return resp?.data.gists || null;
};

export default getGists;
