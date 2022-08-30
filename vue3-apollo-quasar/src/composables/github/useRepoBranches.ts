import { useQuery, useResult } from '@vue/apollo-composable';
import { REPO_BRANCHES_QUERY } from './queries';

export const useRepoBranches = () => {
  const getRepoBranches = ({ owner, name }) => {
    const queryData = {
      owner,
      name,
    };

    const { result, loading } = useQuery(REPO_BRANCHES_QUERY, queryData);

    const data = useResult(result, [], (data) => {
      const branches = data?.repository?.branches?.nodes;

      if (!branches) {
        return [];
      }
      const isDefaultBranch = (branch): boolean =>
        data?.repository?.defaultBranchRef.name === branch;

      const mappedBranches = branches.map((b) => {
        return {
          name: b.name,
          default: isDefaultBranch(b.name) ? true : false,
        };
      });

      return mappedBranches;
    });
    return { data, loading };
  };
  return { getRepoBranches };
};
