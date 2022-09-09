import { useQuery, useResult } from '@vue/apollo-composable';
import { REPO_README_QUERY } from './queries';
import { Ref } from 'vue';

interface UseRepoReadMe {
  getRepoReadMe: (data: { owner: string; name: string; path: string }) => {
    readme: Ref<string | null>;
    loading: Ref<boolean>;
  };
}
export const useRepoReadMe = (): UseRepoReadMe => {
  const getRepoReadMe = ({ owner, name, path }) => {
    const { result, loading } = useQuery(REPO_README_QUERY, {
      owner: owner,
      name: name,
      expression: path ? `HEAD:${path}/README.md` : 'HEAD:README.md',
    });

    const readme = useResult(result, [], (data) => {
      const readme = data.repository?.readme as Blob;
      return readme?.text ?? undefined;
    });
    return { readme: readme as Ref<string | null>, loading };
  };
  return { getRepoReadMe };
};
