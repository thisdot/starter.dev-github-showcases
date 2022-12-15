export enum RepositorySearchType {
  All = '',
  Public = 'public',
  Private = 'private',
  Sources = 'sources',
  Forks = 'forks',
  Archived = 'archived',
  Mirrors = 'mirrors',
  Templates = 'templates',
}

export enum RepositorySearchSort {
  LastUpdated = 'updated',
  Name = 'name',
  Stars = 'stars',
}

export const REPOSITORY_FILTERS_LABELS_MAP = new Map([RepositorySearchType]);
