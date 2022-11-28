import { gqlFetch } from '../helper/gqlFetch';
import { useAuth } from '../auth';
import { ISSUES_QUERY } from './queries/issue-info';
import { GITHUB_GRAPHQL } from '../helper/constants';

const getIssues = async (variables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: ISSUES_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await gqlFetch(data);
  const repository = resp.data?.repository;

  return {
    openIssues: repository?.openIssues.nodes,
    closedIssues: repository?.closedIssues.nodes,
  };
};

export default getIssues;
