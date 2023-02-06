import FetchApi from './api';
import { useAuth } from '../auth';
import { REPO_README_QUERY } from './queries/repo-readme';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { ApiProps } from './api';
import { RepoReadme } from '~/types/repo-readme-types';

type RepoReadmeVariables = {
  owner: string, 
  name: string,
  expression: string
}

type Response = {
  data: {
    repository: RepoReadme;
  };
};

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
const getReadme = async (variables: RepoReadmeVariables) => {
  const { authStore } = useAuth();

  const data: ApiProps<RepoReadmeVariables> = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_README_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };

  const resp = await FetchApi(data) as Response;

  return resp.data.repository?.readme?.text;
};

export default getReadme;
