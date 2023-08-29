import { PageInfo, Label, Milestone, MilestoneProps, LabelProps } from '~/types';

export type RepoPullRequestsQuery = {
  repository: {
    openPullRequest: PullRequestProps;
    closedPullRequest: PullRequestProps;
    milestones: MilestoneProps;
    labels: LabelProps;
  };
};

export interface PullRequestNodeProps {
  id: string;
  state: string;
  createdAt: string;
  closedAt: string;
  title: string;
  author: {
    login: string;
  };
  url: string;
  labels: {
    totalCount: number;
    nodes: Label[];
  };
  merged: boolean;
  closed: boolean;
  mergedAt?: string;
  comments: {
    totalCount: number;
  };
  number: number;
}

export type PullRequest = {
  id: string;
  url: string;
  state: string;
  comments?: {
    totalCount: number;
  };
  login: string;
  title: string;
  number: number;
  closed: boolean;
  closedAt?: string | null;
  merged: boolean;
  mergedAt?: string | null;
  createdAt: string;
  labels: Label[];
  commentCount: number;
  labelCount: number;
};

export interface PullRequestProps {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: PullRequestNodeProps[];
}

export interface ParsedPullRequestQuery {
  openPullRequests: ParsedPullRequest;
  closedPullRequests: ParsedPullRequest;
  labels: Label[];
  milestones: Milestone[];
}

export interface ParsedPullRequest {
  pullRequests: PullRequest[];
  totalCount: number;
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean };
}
