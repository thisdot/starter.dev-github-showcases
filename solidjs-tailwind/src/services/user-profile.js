import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../helper/constants';
import { USER_PROFILE_QUERY } from './queries/user-profile';

const userProfile = async () => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: USER_PROFILE_QUERY,
    variables: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  return resp.user;
};

export default userProfile;
