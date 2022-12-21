import type { GithubSimpleUser, Repository } from '$lib/interfaces';

export const resolveRepositoryHref = (repository: Repository): string =>
  `/${repository.owner.login}/${repository.name}`;

export const resolveUserHref = (user: GithubSimpleUser): string => `/${user.login}`;
