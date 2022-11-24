import FetchApi from './api';
import { useAuth } from '../auth';
import { ORGANIZATION_REPOS_QUERY } from './queries/org-repos';

/**
 * @param {string} url
 * @param {Object} variable: {organization, first}
 *
 */

const getOrgRepos = async ({ url, variable }) => {
  const { authStore } = useAuth();

  const data = {
    url,
    query: ORGANIZATION_REPOS_QUERY,
    variable,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);
  return resp.organization;
};

export default getOrgRepos;
