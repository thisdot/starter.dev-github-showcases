import { useQuery, useResult } from '@vue/apollo-composable';
import { REPO_README_QUERY } from './queries';
import { Ref } from 'vue';

interface UseRepoReadMe {
  getRepoReadMe: (data: {
    owner: string;
    name: string;
    path: string;
    branch: string;
  }) => {
    readme: Ref<string | null>;
    loading: Ref<boolean>;
  };
}
export const useRepoReadMe = (): UseRepoReadMe => {
  const getRepoReadMe = ({ owner, name, path, branch }) => {
    const queryData = {
      owner,
      name,
      expression: path ? `${branch}:${path}` : `${branch}:README.md`,
    };
    console.log('====================================');
    console.log(queryData);
    console.log('====================================');
    const { result, loading } = useQuery(REPO_README_QUERY, queryData);

    const readme = useResult(result, [], (data) => {
      const readme = data.repository?.readme as Blob;
      return readme?.text ?? undefined;
    });
    return { readme: readme as Ref<string | null>, loading };
  };
  return { getRepoReadMe };
};
