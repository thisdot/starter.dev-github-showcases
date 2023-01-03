import type { Repository } from '$lib/interfaces';
import type { NavigationFilterOption } from '../shared/models/navigation-filter-option';

export type RepositoryCardViewModel = Repository & {
  routeHref: string;
};

type RepositoryListViewModel = {
  repositories: RepositoryCardViewModel[];
};

export type TopRepositoriesListViewModel = RepositoryListViewModel & {
  viewAllRouteHref?: string;
};

export type RepositoryListControlsViewModel = {
  sortFilters?: NavigationFilterOption[];
  typeFilters?: NavigationFilterOption[];
  search?: {
    term: string | undefined;
  };
  resetFiltersHref?: string;
};

export type AllRepositoriesListViewModel = RepositoryListViewModel & {
  controls: RepositoryListControlsViewModel;
};
