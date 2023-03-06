import FetchApi from './api';
import { TOP_REPOS_QUERY } from './queries/top-repos';
import { TopRepositories, TopRepository } from '../types/top-repos-type';
import { useAppStore } from '../hooks/stores';

type Response = {
  data: TopRepositories;
};

const getTopRepos = async () => {
  try {
    useAppStore.setState({ isLoading: true });
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
          isPrivate: repo.isPrivate,
        },
      ];
    }, [] as TopRepository[]);
    useAppStore.setState({ isLoading: false, topRepos: repos, login: resp.data?.viewer.login });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getTopRepos;
