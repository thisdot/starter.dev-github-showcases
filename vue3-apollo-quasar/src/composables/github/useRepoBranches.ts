import { useQuery, useResult } from '@vue/apollo-composable';
import { REPO_BRANCHES_QUERY } from './queries';
import { Ref } from 'vue';

type Branches = {
  name: string;
  default: boolean;
};

interface UseRepoBranches {
  getRepoBranches: (data: { owner: string; name: string }) => {
    data: Ref<Branches[]>;
    loading: Ref<boolean>;
  };
}

export const useRepoBranches = (): UseRepoBranches => {
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
      const isDefaultBranchName = (branchName: string): boolean =>
        data?.repository?.defaultBranchRef.name === branchName;

      const mappedBranches = branches.map((b) => {
        return {
          name: b.name,
          default: isDefaultBranchName(b.name) ? true : false,
        };
      });

      return mappedBranches;
    });
    return { data: data as Ref<Branches[]>, loading };
  };
  return { getRepoBranches };
};
