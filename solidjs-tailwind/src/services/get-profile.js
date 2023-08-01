import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { LOGGEDIN_USER_PROFILE } from './queries/viewer-profile';

const getProfile = async () => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: LOGGEDIN_USER_PROFILE,
    variables: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  return resp.data?.viewer;
};

export default getProfile;
