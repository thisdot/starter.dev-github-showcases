import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { ORGANIZATION_REPOS_QUERY } from './queries/org-repos';
import { OrgRepoInfo } from '~/types/org-repos';

type Variables = Record<string, string | number | null> | null;
type Response = {
  data: OrgRepoInfo;
};

const getOrgRepos = async (variables: Variables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: ORGANIZATION_REPOS_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;
  return {
    orgInfo: {
      avatarUrl: resp.data?.organization?.avatarUrl,
      name: resp.data?.organization?.name,
    },
    repositories: resp?.data?.organization?.repositories,
  };
};

export default getOrgRepos;
