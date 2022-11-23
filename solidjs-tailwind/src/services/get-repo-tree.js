import FetchApi from './api';
import { useAuth } from '../auth';
import { REPO_TREE_QUERY } from './queries/repo-tree';

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

const getRepoTree = async ({ url, variable }) => {
  const { authStore } = useAuth();

  const data = {
    url,
    query: REPO_TREE_QUERY,
    variable,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  return {
    branches: resp.repository?.branches?.nodes,
    tree: resp.repository?.tree?.entries,
  };
};

export default getRepoTree;
