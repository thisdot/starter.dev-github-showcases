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
  number: number;
  state: GithubIssueMilestoneState;
  title: string;
}
