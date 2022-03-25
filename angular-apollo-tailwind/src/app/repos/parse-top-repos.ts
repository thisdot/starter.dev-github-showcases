import { TopRepo, UserTopReposQuery } from '../gql';

export const parseTopRepos = (data: UserTopReposQuery): TopRepo[] => {
  const repos = data.viewer.topRepositories.nodes ?? [];
  return repos.reduce((acc: TopRepo[], repo) => {
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
        updatedAt: new Date(repo.updatedAt),
      },
    ];
  }, []);
};
