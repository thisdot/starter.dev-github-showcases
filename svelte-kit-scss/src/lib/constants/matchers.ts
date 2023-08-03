import { IssueSearchQueryType } from './issues-search-query-filters';

export const IssueSearchPageTypeFiltersMap = {
  issues: IssueSearchQueryType.Issue,
  pulls: IssueSearchQueryType.PullRequest,
};

export type IssueSearchTypePage = keyof typeof IssueSearchPageTypeFiltersMap;
