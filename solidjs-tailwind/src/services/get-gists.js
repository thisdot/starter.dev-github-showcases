import FetchApi from "./api";
import { USER_GISTS_QUERY } from "./queries/gists";

const getGists = async ({url}) => {
    const data = {
      url,
      query: USER_GISTS_QUERY,
      variable: null,
      headersOptions: {
        authorization: `Bearer tokenvalue`,
      }
    }
    return await FetchApi(data);
};

export default getGists;
