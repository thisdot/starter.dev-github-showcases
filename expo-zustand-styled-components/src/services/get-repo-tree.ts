import FetchApi from './api';
import { REPO_TREE_QUERY } from './queries/repo-tree';
import { RepoTree, RepoTreeVariables } from '../types/repo-tree-type';

type Response = {
  data: {
    repository: RepoTree;
  };
};

const getRepoTree = async (variables: RepoTreeVariables) => {
  const resp = (await FetchApi({ query: REPO_TREE_QUERY, variables })) as Response;

  return {
    branches: resp.data?.repository?.branches?.nodes,
    tree: resp.data?.repository?.tree?.entries,
  };
};

export default getRepoTree;
