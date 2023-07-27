import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { REPO_FILE_QUERY } from './queries/repo-file';

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

const getRepoFile = async (variables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_FILE_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  return resp?.data?.repository?.blob;
};

export default getRepoFile;
