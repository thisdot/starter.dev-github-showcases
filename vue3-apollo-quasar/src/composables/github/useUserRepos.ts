import {
  OrderDirection,
  useRepoFilters,
} from '@/components/RepoFilters/useRepoFilters';
import { useQuery, useResult } from '@vue/apollo-composable';
import { USER_REPOS_QUERY } from './queries';
import { Repo } from './types/userRepos';

export const useUserRepos = () => {
  const getUserRepos = (username, isOrg = false) => {
    const repoFilters = useRepoFilters();
    let pageInfo;
    const { result, loading } = useQuery(USER_REPOS_QUERY, {
      username,
      orderBy: {
        field: repoFilters.state.sort,
        direction: OrderDirection.Desc,
      },
      first: repoFilters.state.first,
      last: repoFilters.state.last,
    });

    const repos = useResult(result, [], (data) => {
      const nodes = data?.owner?.repositories?.nodes;
      pageInfo = data?.owner?.repositories?.pageInfo;

      if (!nodes) {
        return undefined;
      }

      nodes?.reduce((acc: Repo[], repo) => {
        return repo
          ? [
              ...acc,
              {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                stargazerCount: repo.stargazerCount,
                forkCount: repo.forkCount,
                primaryLanguage: {
                  name: repo.primaryLanguage?.name,
                  color: repo.primaryLanguage?.color,
                },
                visibility: repo.isPrivate,
                updatedAt: repo.updatedAt,
              },
            ]
          : acc;
      }, []);
      return nodes;
    });

    return {
      repos,
      pageInfo,
      loading,
    };
  };

  return getUserRepos;
};
