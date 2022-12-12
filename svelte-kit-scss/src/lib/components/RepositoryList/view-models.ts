import type { Repository } from '$lib/interfaces';

export type RepositoryCardViewModel = Repository & {
  routeHref: string;
};

type RepositoryListViewModel = {
  repositories: RepositoryCardViewModel[];
};

export type TopRepositoriesListViewModel = RepositoryListViewModel & {
  viewAllRouteHref?: string;
};

export type AllRepositoriesListViewModel = RepositoryListViewModel;
