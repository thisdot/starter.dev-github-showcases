import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { REPO_TREE_QUERY } from './queries/repo-tree';
import { RepoTree } from '~/types/repo-tree-type';

type RepoTreeVariables = {
  owner: string;
  name: string;
  expression: string;
};

type Response = {
  data: {
    repository: RepoTree;
  };
};

const getRepoTree = async (variables: RepoTreeVariables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_TREE_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;

  return {
    branches: resp.data?.repository?.branches?.nodes,
    tree: resp.data?.repository?.tree?.entries,
  };
};

export default getRepoTree;
