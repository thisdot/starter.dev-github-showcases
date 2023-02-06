import { useAuth } from '~/auth';
import { StoreProps } from '~/auth/AuthStore';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { USER_GISTS_QUERY } from './queries/gists';
import FetchApi, { ApiProps } from './api';

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

  return resp;
};

export default getGists;
