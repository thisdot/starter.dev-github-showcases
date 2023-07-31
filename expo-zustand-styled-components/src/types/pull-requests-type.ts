import { Label } from './label-type';
import { PageInfo as UserPageInfo } from './user-repos-type';

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
    openPullRequest: {
      totalCount: number;
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string;
        endCursor?: string;
      };
      nodes: PullRequestNodeProps[];
    };
    closedPullRequest: {
      totalCount: number;
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string;
        endCursor?: string;
      };
      nodes: PullRequestNodeProps[];
    };
    labels: {
      totalCount: number;
      nodes: Label[];
    };
  };
};

export type PageInfo = UserPageInfo;

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
