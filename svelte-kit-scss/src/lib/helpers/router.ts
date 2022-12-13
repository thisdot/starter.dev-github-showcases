import type { Repository } from '$lib/interfaces';

export const resolveRepositoryHref = (repository: Repository): string =>
  `/${repository.owner.login}/${repository.name}`;
