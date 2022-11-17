import FetchApi from "./api";
import { useAuth } from "../auth";
import { USER_PROFILE_QUERY } from "./queries/user-profile";

const userProfile = async ({
  url
}) => {
  const { authStore } = useAuth();

  const data = {
    url,
    query: USER_PROFILE_QUERY,
    variable: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    }
  }
  const resp = await FetchApi(data);

  return resp.user;
};

export default userProfile;
