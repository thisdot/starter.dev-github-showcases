import FetchApi, { ApiProps } from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { USER_PROFILE_QUERY } from './queries/user-profile';
import { UserProfile } from '~/types/user-profile-type';

type Variables = Record<string, string | number | null> | null;
type Response = {
  data: {
    user: UserProfile;
  };
};

const userProfile = async (variables: Variables) => {
  const { authStore } = useAuth();

  const data: ApiProps = {
    url: `${GITHUB_GRAPHQL}`,
    query: USER_PROFILE_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;

  return resp.data?.user;
};

export default userProfile;
