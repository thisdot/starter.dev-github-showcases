/*eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from './label-type';

export interface PullRequest {
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
export type RepoPullRequestsQuery = {
  repository: {
    openPullRequests: {
      totalCount: number;
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string | undefined;
        endCursor?: string | undefined;
      };
      nodes: PullRequestNodeProps[];
    };
    closedPullRequests: {
      totalCount: number;
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string | undefined;
        endCursor?: string | undefined;
      };
      nodes: PullRequestNodeProps[];
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
