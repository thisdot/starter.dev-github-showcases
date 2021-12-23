import { ORDER_BY_DIRECTION } from './order-by';
import { PageInfo } from './page-info';
import { Label } from './repo-issues';

export interface RepoPullRequestsData {
  repository: PullRequestDetails;
}

export interface PullRequestDetails {
  id: string;
  closedPullRequests: PullRequests;
  openPullRequests: PullRequests;
}

export interface PullRequests {
  pageInfo: PageInfo;
  totalCount: number;
  nodes: PullRequest[];
}

export interface PullRequestsFormatted {
  pageInfo: PageInfo;
  totalCount: number;
  nodes: PullRequestFormatted[];
}

export interface PullRequest {
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
  merged: boolean;
  mergedAt: string;
  title: string;
  number: number;
  createdAt: string;
}

export interface PullRequestFormatted
  extends Omit<PullRequest, 'createdAt' | 'closedAt' | 'mergedAt'> {
  createdAt: Date;
  closedAt?: Date;
  mergedAt: Date;
}

export interface RepoPullRequestsVars {
  owner: string;
  name: string;
  before?: string;
  after?: string;
  labels?: string[];
  orderBy?: any;
}

export enum PULL_REQUESTS_TYPE {
  ISSUE = 'issue',
  PULL_REQUEST = 'pull',
}

export const enum PULL_REQUESTS_ORDER_FIELD {
  COMMENTS = 'COMMENTS',
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}

export interface SortPullOption {
  field: PULL_REQUESTS_ORDER_FIELD;
  direction: ORDER_BY_DIRECTION;
}
