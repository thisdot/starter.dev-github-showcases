import { useAuth } from '../auth';
import FetchApi from './api';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { USER_REPOS_QUERY } from './queries/all-repos';

const getUserRepos = async (variables) => {
  const { authStore } = useAuth();
  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: USER_REPOS_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);
  const nodes = resp.data?.owner?.repositories?.nodes;
  const pageInfo = resp.data?.owner?.repositories?.pageInfo;

  if (!nodes) {
    return undefined;
  }
  const repos = nodes?.reduce((acc, repo) => {
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

export default getUserRepos;
