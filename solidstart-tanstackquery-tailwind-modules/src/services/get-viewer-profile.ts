import FetchApi, { ApiProps } from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { LOGGEDIN_USER_PROFILE } from './queries/viewer-profile';

type Response = {
  data: {
    viewer: {
      login: string;
      name: string;
      avatarUrl: string;
    };
  };
};

const getViewerProfile = async () => {
  const { authStore } = useAuth();

  const data: ApiProps = {
    url: `${GITHUB_GRAPHQL}`,
    query: LOGGEDIN_USER_PROFILE,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;

  return resp.data?.viewer || null;
};

export default getViewerProfile;
