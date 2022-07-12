import { useQuery, useResult } from '@vue/apollo-composable';
import { REPO_README_QUERY } from './queries';

export const useRepoReadMe = () => {
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
    return { readme, loading };
  };
  return { getRepoReadMe };
};
