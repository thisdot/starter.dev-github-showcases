import { useAuth } from '../auth';
import FetchApi, { ApiProps } from './api';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { TOP_REPOS_QUERY } from './queries/top-repos-query';
import { TopRepositories, TopRepository } from '~/types/top-repos-type';

type Response = {
  data: TopRepositories;
};

const getTopRepos = async () => {
  const { authStore } = useAuth();
  const data: ApiProps<undefined> = {
    url: `${GITHUB_GRAPHQL}`,
    query: TOP_REPOS_QUERY,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;

  const repos = resp.data?.viewer.topRepositories?.nodes.reduce((acc, repo) => {
    if (!repo) {
      return acc;
    }
    return [
      ...acc,
      {
        id: repo.id,
        name: repo.name,
        owner: repo.owner,
        description: repo.description,
        stargazerCount: repo.stargazerCount,
        forkCount: repo.forkCount,
        primaryLanguage: {
          name: repo.primaryLanguage?.name,
          color: repo.primaryLanguage?.color,
        },
        visibility: repo.visibility,
        updatedAt: repo.updatedAt,
        isPrivate: repo.isPrivate,
      },
    ];
  }, [] as TopRepository[]);

  return { repos, login: resp.data?.viewer.login };
};

export default getTopRepos;
