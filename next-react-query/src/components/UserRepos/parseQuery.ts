import type { UserReposQuery } from '@lib/github';
import type { Repo } from './types';

export function parseQuery(data?: UserReposQuery) {
  const nodes = data?.user?.repositories.nodes;
  const pageInfo = data?.user?.repositories.pageInfo;

  if (!nodes) {
    return undefined;
  }

  const repos = nodes.reduce((acc: Repo[], repo) => {
    return repo
      ? [
          ...acc,
          {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazerCount: repo.stargazerCount,
            forkCount: repo.forkCount,
            languageColor: repo.primaryLanguage?.color,
            language: repo.primaryLanguage?.name,
            isPrivate: repo.isPrivate,
            isArchived: repo.isArchived,
            isFork: repo.isFork,
            updatedAt: repo.updatedAt,
          },
        ]
      : acc;
  }, []);

  return {
    repos,
    pageInfo,
  };
}
