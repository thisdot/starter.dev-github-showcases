import { useQuery, useResult } from '@vue/apollo-composable';
import { REPO_TREE_QUERY } from './queries';

interface ExplorerItem {
  name: string;
  path: string;
  type: string;
}

export const useRepoTree = () => {
  const getRepoTree = ({ owner, name, branch, path }) => {
    const queryData = {
      owner,
      name,
      expression: `${branch}:${path}`,
    };

    const { result, loading } = useQuery(REPO_TREE_QUERY, queryData);

    const data = useResult(result, [], (data) => {
      const fileTree = data?.repository?.tree;
      if (fileTree?.text) {
        return fileTree.text;
      }
      const items: ExplorerItem[] =
        fileTree?.entries?.map(({ name, path, type }) => {
          return {
            name,
            path: path ?? '',
            type,
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
    });
    return { data, loading };
  };
  return { getRepoTree };
};
