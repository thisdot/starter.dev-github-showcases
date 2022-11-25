export enum IssuesSearchQuerySort {
  'Newest' = 'sort:created-desc',
  'Oldest' = 'sort:created-asc',
  'Most commented' = 'sort:comments-desc',
  'Least commented' = 'sort:comments-asc',
  'Recently updated' = 'sort:updated-desc',
  'Least recently updated' = 'sort:updated-asc',
  'BestMatch' = 'sort:relevance-desc',
}

export enum IssueSearchQueryState {
  'Open' = 'is:open',
  'Closed' = 'is:closed',
}

export enum IssueSearchQueryType {
  'Issue' = 'is:issue',
  'Pull request' = 'is:pr',
}

export const PREDEFINED_SEARCH_QUERY_PARAMETER_GROUPS = [
  Object.values(IssuesSearchQuerySort),
  Object.values(IssueSearchQueryState),
  Object.values(IssueSearchQueryType),
] as string[][];
