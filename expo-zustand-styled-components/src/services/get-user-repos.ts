import FetchApi from './api';
import { USER_REPOS_QUERY } from './queries/user-repos';
import { Repo, UserRepoInfo, UserReposVariables } from '../types/user-repos-type';
import { useAppStore } from '../hooks/stores';

type Response = {
  data: UserRepoInfo;
};

const getUserRepos = async (variables: UserReposVariables) => {
  try {
    useAppStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: USER_REPOS_QUERY, variables })) as Response;
    const nodes = resp.data?.owner?.repositories?.nodes;
    const pageInfo = resp.data?.owner?.repositories?.pageInfo;

    if (!nodes) {
      return null;
    }
    const repos = nodes?.reduce((acc: Repo[], repo: Repo) => {
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

    useAppStore.setState({ isLoading: false, userRepos: repos, pageInfo });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getUserRepos;
