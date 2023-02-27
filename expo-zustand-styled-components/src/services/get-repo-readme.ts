import FetchApi from './api';
import { REPO_README_QUERY } from './queries/repo-readme';
import { ApiProps } from './api';
import { RepoReadme } from '../types/repo-readme-type';

type RepoReadmeVariables = {
  owner: string;
  name: string;
  expression: string;
};

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

  const data: ApiProps<RepoReadmeVariables> = {
    url: ``, // Missing url
    query: REPO_README_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer `, // Missing token
    },
  };

  const resp = (await FetchApi(data)) as Response;

  return resp.data.repository?.readme?.text;
};

export default getReadme;
