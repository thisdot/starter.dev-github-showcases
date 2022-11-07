import { TOP_REPOS_QUERY } from "./queries/top-repos";
import FetchApi from "./api";

const getTopRepos = async ({url}) => {
  const data = {
    url,
    query: TOP_REPOS_QUERY,
    variable: null,
    headersOptions: {
      authorization: `Bearer tokenvalue`,
    }
  }
  return await FetchApi(data);
};

export default getTopRepos;
