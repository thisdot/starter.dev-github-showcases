export enum IssuesSearchQuerySort {
  Newest = 'sort:created-desc',
  Oldest = 'sort:created-asc',
  MostCommented = 'sort:comments-desc',
  LeastCommented = 'sort:comments-asc',
  RecentlyUpdated = 'sort:updated-desc',
  LeastRecentlyUpdated = 'sort:updated-asc',
  BestMatch = 'sort:relevance-desc',
}

export enum IssueSearchQueryState {
  Open = 'is:open',
  Closed = 'is:closed',
}

export enum IssueSearchQueryType {
  Issue = 'is:issue',
  PullRequest = 'is:pr',
}

export const AllowedIssuesSearchQueries = [
  Object.values(IssuesSearchQuerySort),
  Object.values(IssueSearchQueryState),
  Object.values(IssueSearchQueryType),
] as const;

export const AllowedIssuesSearchQueryValues = AllowedIssuesSearchQueries.flat();

export type IssueSearchQueryFilter = typeof AllowedIssuesSearchQueryValues[number];
