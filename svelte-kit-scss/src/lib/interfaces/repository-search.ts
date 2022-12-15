import type { RepositorySearchSort, RepositorySearchType } from '$lib/constants/repository-search';
import type { Repository } from './repository';

export type RepositoryPageSearchQueryParameters = {
  language?: string;
  q?: string;
  sort?: string;
  type?: string;
};

export type RepositorySearchResultItem = Repository;

export type RepositorySearchQueryParameters = {
  language?: string;
  sort?: RepositorySearchSort;
  term?: string;
  type?: RepositorySearchType;
};
