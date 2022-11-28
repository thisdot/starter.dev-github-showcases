import { gqlFetch } from '../helper/gqlFetch';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../helper/constants';
import { USER_PROFILE_QUERY } from './queries/user-profile';

const userProfile = async (variables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: USER_PROFILE_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await gqlFetch(data);

  return resp.data?.user;
};

export default userProfile;
