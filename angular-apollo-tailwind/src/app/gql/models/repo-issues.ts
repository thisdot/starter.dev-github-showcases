import { ORDER_BY_DIRECTION } from './order-by';

export interface RepoIssuesData {
  repository: RepoIssueDetails;
}

export interface RepoIssueDetails {
  id: string;
  milestones: Milestones;
  closedIssues: Issues;
  openIssues: Issues;
}

export interface Milestones {
  nodes: Milestone[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface Issues {
  pageInfo: PageInfo;
  totalCount: number;
  nodes: Issue[];
}

export interface IssuesFormatted {
  pageInfo: PageInfo;
  totalCount: number;
  nodes: IssueFormatted[];
}

export interface Milestone {
  id: string;
  closed: boolean;
  description: string;
  number: number;
  title: string;
}

export interface Issue {
  id: string;
  author: {
    login: string;
  };
  comments: {
    totalCount: number;
  };
  labels: {
    nodes: Label[];
    totalCount?: number;
  };
  closed: boolean;
  closedAt?: string;
  title: string;
  number: number;
  createdAt: string;
}

export interface IssueFormatted extends Omit<Issue, 'createdAt' | 'closedAt'> {
  createdAt: Date;
  closedAt?: Date;
}

export interface Label {
  color: string;
  name: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface RepoIssuesVars {
  owner: string;
  name: string;
  before?: string;
  after?: string;
  filterBy?: any;
  orderBy?: any;
}

export enum OPEN_CLOSED_STATE {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export enum ISSUE_TYPE {
  ISSUE = 'issue',
  PULL_REQUEST = 'pull',
}

export enum ISSUE_ORDER_FIELD {
  COMMENTS = 'COMMENTS',
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}

export interface SortOption {
  field: ISSUE_ORDER_FIELD;
  direction: ORDER_BY_DIRECTION;
}
