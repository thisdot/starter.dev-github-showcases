import type { UserTopReposQuery } from '@lib/github';
import type { TopRepo } from './types';

export function parseQuery(data: UserTopReposQuery) {
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
        owner: repo.owner.login,
        language: repo.primaryLanguage?.name,
        isPrivate: repo.isPrivate,
        stargazerCount: repo.stargazerCount,
        forkCount: repo.forkCount,
        updatedAt: repo.updatedAt,
      },
    ];
  }, []);
}
