import FetchApi from "./api";
import { USER_PROFILE_QUERY } from "./queries/user-profile";

const userProfile = async ({
  url
}) => {
  const data = {
    url,
    query: USER_PROFILE_QUERY,
    variable: null,
    headersOptions: {
      authorization: `Bearer tokenvalue`,
    }
  }
  const resp = await FetchApi(data);

  return resp.user;
};

export default userProfile;
