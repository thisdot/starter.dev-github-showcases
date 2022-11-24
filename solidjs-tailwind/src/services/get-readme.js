import FetchApi from './api';
import { useAuth } from '../auth';
import { REPO_README_QUERY } from './queries/repo-readme';
/**
 *
 * @param {
 *  variable: {
 *    owner
 *    name
 *    expression
 *  }
 * }
 */
const getReadme = async ({ url, variables }) => {
  const { authStore } = useAuth();

  const data = {
    url,
    query: REPO_README_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  return resp.repository?.readme?.text;
};

export default getReadme;
