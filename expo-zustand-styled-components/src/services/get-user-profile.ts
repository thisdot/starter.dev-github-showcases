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

const userProfile = async (variables: UserProfileVariables) => {

  const data: ApiProps<UserProfileVariables> = {
    url: ``, // Missing url
    query: USER_PROFILE_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer `, //missing token
    },
  };
  const resp = (await FetchApi(data)) as Response;

  return resp.data?.user || null;
};

export default userProfile;
