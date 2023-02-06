import { useAuth } from '../auth';
import FetchApi, { ApiProps } from './api';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { UserRepo, UserRepoInfo } from '~/types/user-repo-type';
import { TOP_REPOS_QUERY } from './queries/top-repos-query';

type Variables = Record<string, string | number | null> | null;
type Response = {
  data: UserRepoInfo;
};

const getTopRepos = async (variables: Variables) => {
  const { authStore } = useAuth();
  const data: ApiProps = {
    url: `${GITHUB_GRAPHQL}`,
    query: TOP_REPOS_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;
  const nodes = resp.data?.owner?.repositories?.nodes;
  const pageInfo = resp.data?.owner?.repositories?.pageInfo;

  if (!nodes) {
    return undefined;
  }
  const repos = nodes?.reduce((acc: UserRepo[], repo: UserRepo) => {
    return repo
      ? [
          ...acc,
          {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazerCount: repo.stargazerCount,
            forkCount: repo.forkCount,
            isFork: repo.isFork,
            isArchived: repo.isArchived,
            primaryLanguage: {
              name: repo.primaryLanguage?.name,
              color: repo.primaryLanguage?.color,
            },
            visibility: repo.visibility,
            updatedAt: repo.updatedAt,
            owner: repo.owner,
          },
        ]
      : acc;
  }, []);

  return {
    pageInfo,
    repos,
  };
};

export default getTopRepos;