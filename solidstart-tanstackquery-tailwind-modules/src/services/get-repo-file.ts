import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { REPO_FILE_QUERY } from './queries/repo-file';
import { ApiProps } from './api';
import { RepoFile } from '~/types/repo-file-type';

type RepoFileVariables = {
  owner: string;
  name: string;
  expression: string;
};

type Response = {
  data: {
    repository: RepoFile;
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

const getRepoFile = async (variables: RepoFileVariables) => {
  const { authStore } = useAuth();

  const data: ApiProps<RepoFileVariables> = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_FILE_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;

  return resp?.data?.repository?.blob || null;
};

export default getRepoFile;
