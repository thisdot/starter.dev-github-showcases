import type { UserReposQuery } from '@lib/github';
import type { Repo } from './types';

export function parseQuery(data?: UserReposQuery): Repo[] | undefined {
  const nodes = data?.user?.repositories.nodes;
  if (!nodes) {
    return undefined;
  }

  return nodes.reduce(
    (acc: Repo[], repo) =>
      repo
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
              updatedAt: repo.updatedAt,
            },
          ]
        : acc,
    []
  );
}
