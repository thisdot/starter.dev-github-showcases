export interface IssueLabel {
  color: string;
  id: number;
  name: string;
  url: string;
}

export interface IssueUser {
  avatarUrl: string;
  login: string;
}

export enum IssueState {
  Open = 'open',
  Closed = 'closed',
}

export type IssueAssignee = IssueUser;

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
}

export interface IssueCollection {
  totalCount: number;
  items: Issue[];
}
