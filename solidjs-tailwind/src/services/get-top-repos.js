import { useAuth } from '../auth';
import { TOP_REPOS_QUERY } from './queries/top-repos';
import { GITHUB_GRAPHQL } from '../utils/constants';
import FetchApi from './api';

const getTopRepos = async () => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: TOP_REPOS_QUERY,
    variables: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

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
  }, []);

  return { repos, login: resp.data?.viewer.login };
};

export default getTopRepos;
