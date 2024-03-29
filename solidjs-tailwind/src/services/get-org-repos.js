import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { ORGANIZATION_REPOS_QUERY } from './queries/org-repos';

/**
 * @param {string} url
 * @param {Object} variable: {organization, first}
 *
 */

const getOrgRepos = async (variables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: ORGANIZATION_REPOS_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);
  return {
    orgInfo: {
      avatarUrl: resp.data?.organization?.avatarUrl,
      name: resp.data?.organization?.name,
    },
    repositories: resp?.data?.organization?.repositories,
  };
};

export default getOrgRepos;
