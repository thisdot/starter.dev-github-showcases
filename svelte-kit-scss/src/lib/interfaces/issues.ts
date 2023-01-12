import type { IssueLabel } from './issue-label';

export interface IssueUser {
  avatarUrl: string;
  login: string;
}

export enum IssueState {
  Open = 'open',
  Closed = 'closed',
}

export type IssueAssignee = IssueUser;

export type IssuePullRequest = {
  url: string;
  htmlUrl: string;
  mergedAt?: string | null;
};

export interface Issue {
  assignees: IssueAssignee[];
  closedAt?: string | null;
  commentsCount: number;
  createdAt: string;
  id: number;
  labels: IssueLabel[];
  number: number;
  state: IssueState;
  title: string;
  user: IssueUser;
  htmlUrl: string;
  pullRequest?: IssuePullRequest;
}

export interface IssueCollection {
  totalCount: number;
  items: Issue[];
}
