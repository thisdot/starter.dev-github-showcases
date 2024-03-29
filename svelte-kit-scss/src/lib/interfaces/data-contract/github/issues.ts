import type { GithubSimpleUser } from './common';
import type { GithubIssueLabel } from './issue-label';

export type GithubSearchIssueState = 'open' | 'close';

export enum GithubIssueAuthorAssociation {
  Collaborator = 'COLLABORATOR',
  Contributor = 'CONTRIBUTOR',
  FirstTimeContributor = 'FIRST_TIME_CONTRIBUTOR',
  FirstTimer = 'FIRST_TIMER',
  Mannequin = 'MANNEQUIN',
  Member = 'MEMBER',
  None = 'NONE',
  Owner = 'OWNER',
}

export type GithubSearchIssuePullRequest = {
  url: string;
  html_url: string;
  merged_at?: string | null;
};

/**
 * Contains the only relevant properties.
 * [`Github API: Search > Search issues and pull requests`](https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-issues-and-pull-requests)
 */
export interface GithubSearchIssue {
  // properties commented for easier mocking

  // url: string;
  // repository_url: string;
  // labels_url: string;
  // comments_url: string;
  // events_url: string;
  html_url: string;
  id: number;
  // node_id: string;
  number: number;
  title: string;
  user: GithubSimpleUser | null;
  labels: GithubIssueLabel[];
  state: GithubSearchIssueState;
  locked: boolean;
  assignee: GithubSimpleUser | null;
  assignees: GithubSimpleUser[];
  milestone?: unknown;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: GithubIssueAuthorAssociation;
  // active_lock_reason?: string | null;
  // draft: boolean;
  pull_request?: GithubSearchIssuePullRequest;
  // body: string;

  // diff_url: string;
  // patch_url: string;
  // issue_url: string;
  // commits_url: string;
  // review_comments_url: string;
  // review_comment_url: string;
  // statuses_url: string;
}
