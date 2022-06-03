import { Label, PageInfo } from '../github.schema';

export interface RepoPullRequests {
  pageInfo: PageInfo;
  totalCount: number;
  pullRequests: RepoPullRequest[];
}

export interface RepoPullRequest {
  id: string;
  login?: string | null;
  title: string;
  number: number;
  closed: boolean;
  closedAt?: Date | null;
  merged: boolean;
  mergedAt?: Date | null;
  createdAt: Date;
  labels: Label[];
  commentCount: number;
  labelCount: number;
}

export enum PULL_REQUESTS_TYPE {
  ISSUE = 'issue',
  PULL_REQUEST = 'pull',
}
