export * from './CurrentUser';
export * from './Gist';
export * from './UserTopRepos';
export * from './Profile';
export * from './PullRequest';
export * from './OrgsProfile';

export * from './Issues';

export * from './OrganizationRepositories';

export * from './OrderBy';
export * from './Label';

export interface PageInfo {
  startCursor?: string;
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
