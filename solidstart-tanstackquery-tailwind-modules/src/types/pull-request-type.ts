import { MilestoneProps } from './issues-type';
import { Label } from './label-type';

export interface PullRequest {
  login: string;
  commentCount: number;
  labelCount: number;
  labels: Label[];
  title: string;
  number: number;
  createdAt: string;
  closedAt: string;
  state: string;
  url: string;
}

export type RepoPullRequestsQuery = {
  repository: {
    openPullRequests: {
      totalCount: number;
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string;
        endCursor?: string;
      };
      nodes: PullRequestNodeProps[];
    };
    closedPullRequests: {
      totalCount: number;
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string;
        endCursor?: string;
      };
      nodes: PullRequestNodeProps[];
    };
    milestones: {
      nodes: MilestoneProps[];
      pageInfo: PageInfo;
      totalCount: number;
    };
    labels: {
      totalCount: number;
      nodes: Label[];
    };
  };
};

export interface PageInfo {
  startCursor?: string;
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PullRequestProps {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: PullRequestNodeProps[];
}

export interface PullRequestNodeProps {
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
  comments: {
    totalCount: number;
  };
  number: number;
}
