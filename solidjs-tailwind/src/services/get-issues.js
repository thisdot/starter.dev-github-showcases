import FetchApi from './api';
import { useAuth } from '../auth';
import { ISSUES_QUERY } from './queries/issue-info';

const getIssues = async ({ url, variables }) => {
  const { authStore } = useAuth();

  const data = {
    url,
    query: ISSUES_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);
  const repository = resp.repository;

  return {
    openIssues: repository?.openIssues.nodes,
    closedIssues: repository?.closedIssues.nodes,
  };
};

export default getIssues;
