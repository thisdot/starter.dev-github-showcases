import { USER_PROFILE_QUERY } from './queries/user-profile';
import { Profile } from '../types/user-profile-type';
import FetchApi, { ApiProps } from './api';

type UserProfileVariables = {
  username: string;
};

type Response = {
  data: {
    user: Profile;
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
