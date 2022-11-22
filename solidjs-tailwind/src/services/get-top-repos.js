import { useAuth } from '../auth';
import { TOP_REPOS_QUERY } from './queries/top-repos';
import gqlFetch from '../helpers/gqlFetch';

const getTopRepos = async ({ url }) => {
  const { authStore } = useAuth();

  const data = {
    url,
    query: TOP_REPOS_QUERY,
    variable: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await gqlFetch(data);

  const repos = resp.viewer.topRepositories?.nodes.reduce((acc, repo) => {
    if (!repo) {
      return acc;
    }
    return [
      ...acc,
      {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        owner: repo.owner.login,
        language: repo.primaryLanguage?.name,
        languageColor: repo.primaryLanguage?.color,
        isPrivate: repo.isPrivate,
        stargazerCount: repo.stargazerCount,
        forkCount: repo.forkCount,
        updatedAt: repo.updatedAt,
      },
    ];
  }, []);

  return repos;
};

export default getTopRepos;
