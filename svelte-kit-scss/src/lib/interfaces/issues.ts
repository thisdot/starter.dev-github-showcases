import type { SimpleUser } from './common';
import type { IssueLabel } from './issue-label';

export enum IssueState {
  Open = 'open',
  Closed = 'closed',
}

export type IssuePullRequest = {
  url: string;
  htmlUrl: string;
  mergedAt?: string | null;
};

export interface Issue {
  assignees: SimpleUser[];
  closedAt?: string | null;
  commentsCount: number;
  createdAt: string;
  id: number;
  labels: IssueLabel[];
  number: number;
  state: IssueState;
  title: string;
  user: SimpleUser | null;
  htmlUrl: string;
  pullRequest?: IssuePullRequest;
}

export interface IssueCollection {
  totalCount: number;
  items: Issue[];
}
