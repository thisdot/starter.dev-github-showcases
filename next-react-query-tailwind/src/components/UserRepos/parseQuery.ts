import type { UserReposQuery, OrgReposQuery } from '@lib/github';
import type { Repo } from './types';

export function parseQuery(data?: UserReposQuery | OrgReposQuery) {
  const nodes = data?.owner?.repositories.nodes;
  const pageInfo = data?.owner?.repositories.pageInfo;

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
