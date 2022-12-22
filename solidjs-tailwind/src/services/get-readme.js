import FetchApi from './api';
import { useAuth } from '../auth';
import { REPO_README_QUERY } from './queries/repo-readme';
import { GITHUB_GRAPHQL } from '../utils/constants';
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
const getReadme = async (variables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_README_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  return resp.data.repository?.readme?.text;
};

export default getReadme;
