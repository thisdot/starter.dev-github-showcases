export enum GithubIssueMilestoneState {
  Open = 'open',
  Closed = 'closed',
}

export enum GithubIssueMilestoneStateFilter {
  Open = 'open',
  Closed = 'closed',
  All = 'all',
}

/**
 * Contains the only relevant properties.
 * [`Github API: Issues > Milestones`](https://docs.github.com/en/rest/issues/milestones)
 */
export interface GithubIssueMilestone {
  id: number;
  title: string;
  number: number;
  state: GithubIssueMilestoneState;
  description: string;
  open_issues: number;
  closed_issues: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  due_on: string;
}
