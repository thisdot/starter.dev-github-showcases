export interface IssueLabel {
  id: number;
  nodeId: string;
  url: string;
  name: string;
  color: string;
}

export interface IssueUser {
  login: string;
  avatarUrl: string;
}

export enum IssueState {
  Open = 'open',
  Closed = 'closed',
}

export type IssueAssignee = IssueUser;

export interface Issue {
  id: number;
  user: IssueUser;
  title: string;
  number: number;
  closedAt?: string | null;
  state: IssueState;
  createdAt: string;
  labels: IssueLabel[];
  commentsCount: number;
  labelCount: number;
  assignees: IssueAssignee[];
}

export interface IssueCollection {
  totalCount: number;
  issues: Issue[];
}
