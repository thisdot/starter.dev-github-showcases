import {
  OrderDirection,
  useRepoFilters,
} from '@/components/RepoFilters/useRepoFilters';
import { useQuery, useResult } from '@vue/apollo-composable';
import { USER_REPOS_QUERY } from './queries';
import { Repo } from './types/userRepos';

// interface UserReposProps {
//   username: string;
//   isOrg?: boolean;
// }

export const useUserRepos = () => {
  const getUserRepos = (username, isOrg = false) => {
    // figure out query for vue router
    //   const { query } = useRouter();

    //   const afterCursor = typeof query.after === 'string' ? query.after : undefined;
    //   const beforeCursor =
    //     typeof query.before === 'string' ? query.before : undefined;

    const repoFilters = useRepoFilters();
    let pageInfo;
    const { result, loading } = useQuery(USER_REPOS_QUERY, {
      username,
      orderBy: {
        field: repoFilters.state.sort,
        direction: OrderDirection.Desc,
      },
      // afterCursor: afterCursor,
      // beforeCursor: beforeCursor,
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
                languageColor: repo.primaryLanguage?.color,
                language: repo.primaryLanguage?.name,
                isPrivate: repo.isPrivate,
                isArchived: repo.isArchived,
                isFork: repo.isFork,
                updatedAt: repo.updatedAt,
              },
            ]
          : acc;
      }, []);
    });

    return {
      repos,
      pageInfo,
      loading,
    };
  };

  return getUserRepos;
};
