import { USER_PROFILE_QUERY } from './queries/user-profile';
import FetchApi, { ApiProps } from './api';
import { UserProfile } from '../types/user-profile-type';

type UserProfileVariables = {
  username: string;
};

type Response = {
  data: {
    user: UserProfile;
  };
};

const getUserProfile = async (variables: UserProfileVariables) => {
  const data: ApiProps<UserProfileVariables> = {
    query: USER_PROFILE_QUERY,
    variables,
  };
  const resp = (await FetchApi(data)) as Response;

  return resp.data?.user || null;
};

export default getUserProfile;
