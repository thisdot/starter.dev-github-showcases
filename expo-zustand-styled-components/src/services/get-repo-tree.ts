import FetchApi from './api';
import { REPO_TREE_QUERY } from './queries/repo-tree';
import { RepoTree, RepoTreeVariables } from '../types/repo-tree-type';
import { useAppStore } from '../hooks/stores';

type Response = {
  data: {
    repository: RepoTree;
  };
};

const getRepoTree = async (variables: RepoTreeVariables) => {
  try {
    useAppStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: REPO_TREE_QUERY, variables })) as Response;
    useAppStore.setState({
      isLoading: false,
      tree: resp.data?.repository?.tree?.entries,
      branches: resp.data?.repository?.branches?.nodes,
    });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getRepoTree;
