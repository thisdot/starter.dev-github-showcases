import FetchApi from './api';
import { TOP_REPOS_QUERY } from './queries/top-repos';
import { TopRepositories, TopRepository } from '../types/top-repos-type';

type Response = {
  data: TopRepositories;
};

const getTopRepos = async () => {
  const resp = (await FetchApi({
    query: TOP_REPOS_QUERY,
  })) as Response;

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
