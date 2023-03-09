import FetchApi from './api';
import { TOP_REPOS_QUERY } from './queries/top-repos';
import { TopRepositories, TopRepository } from '../types/top-repos-type';
import { useTopReposStore } from '../hooks/stores';

type Response = {
  data: TopRepositories;
};

const getTopRepos = async () => {
  if (!useTopReposStore.getState().topRepos) {
    try {
      const resp = (await FetchApi({ query: TOP_REPOS_QUERY })) as Response;
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
          },
        ];
      }, [] as TopRepository[]);
      useTopReposStore.setState({ isLoading: false, topRepos: repos });
    } catch (err) {
      useTopReposStore.setState({ isLoading: false, error: err.message });
    }
  }
};

export default getTopRepos;
