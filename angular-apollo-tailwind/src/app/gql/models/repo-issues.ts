import { ApolloQueryResult } from '@apollo/client/core';
import { Label } from './label';
import { PageInfo } from './page-info';

export interface RepoIssuesData {
  repository: {
    id: string;
    milestones: Milestones;
    closedIssues: RepoIssues;
    openIssues: RepoIssues;
  };
}

export interface RepoIssuesVars {
  owner: string;
  name: string;
  before?: string;
  after?: string;
  filterBy?: any;
  orderBy?: any;
}

export interface Milestones {
  nodes: Milestone[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface RepoIssues {
  pageInfo: PageInfo;
  totalCount: number;
  nodes: RepoIssue[];
}

export interface Milestone {
  id: string;
  closed: boolean;
  description: string;
  number: number;
  title: string;
}

export interface RepoIssue {
  id: string;
  author: {
    login: string;
  };
  comments: {
    totalCount: number;
  };
  labels: {
    nodes: Label[];
    totalCount: number;
  };
  closed: boolean;
  closedAt?: string;
  title: string;
  number: number;
  createdAt: string;
}

export interface Issues {
  issues: Issue[];
  totalCount: number;
  pageInfo: PageInfo;
}

export interface Issue {
  id: string;
  login: string;
  commentCount: number;
  labelCount: number;
  labels: Label[];
  closed: boolean;
  title: string;
  number: number;
  createdAt: Date;
  closedAt?: Date;
}

export interface IssueDetails {
  openIssues: Issues;
  closedIssues: Issues;
  milestones: Milestone[];
  labels: Label[];
}

export interface RepoIssueDetails
  extends IssueDetails,
    ApolloQueryResult<RepoIssuesData> {
  activeIssues: Issues;
}
