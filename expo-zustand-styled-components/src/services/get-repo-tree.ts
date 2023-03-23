import FetchApi from './api';
import { REPO_TREE_QUERY } from './queries/repo-tree';
import { RepoTree, RepoTreeVariables, TreeProps } from '../types/repo-tree-type';
import { useRepoInfoStore } from '../hooks/stores';

type Response = {
  data: {
    repository: RepoTree;
  };
};

export const parseQueryData = (fileTree: TreeProps[]) => {
  const items =
    fileTree?.map(({ path, ...rest }) => {
      return {
        ...rest,
        path: path ?? '',
      };
    }) ?? [];
  return items.sort((a, b) => {
    if (a.type === 'tree' && b.type !== 'tree') {
      return -1;
    }
    if (a.type !== 'tree' && b.type === 'tree') {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
};

const getRepoTree = async (variables: RepoTreeVariables) => {
  const key = `${variables.name}-${variables.owner}-${variables.expression}`;
  if (useRepoInfoStore.getState()._tree.has(key)) {
    const data = useRepoInfoStore.getState()._tree.get(key);
    useRepoInfoStore.setState({ tree: data });
  } else {
    try {
      useRepoInfoStore.setState({ isLoading: true });
      const resp = (await FetchApi({ query: REPO_TREE_QUERY, variables })) as Response;
      const tree = parseQueryData(resp.data?.repository?.tree?.entries);
      useRepoInfoStore.setState({
        isLoading: false,
        tree,
      });
      useRepoInfoStore.getState()._tree.set(key, tree);
    } catch (err) {
      useRepoInfoStore.setState({ isLoading: false, error: err.message });
    }
  }
};

export default getRepoTree;
