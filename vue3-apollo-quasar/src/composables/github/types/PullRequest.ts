import { IPullRequestsParse } from '@/helpers/parsePullRequest';
import { PageInfo } from '.';
import { Label } from './Label';
import { MilestoneProps } from './Milestones';

export type PullRequestData = {
  id: string;
  author: { login: string };
  title: string;
  url: string;
  number: number;
  closedAt?: string | null;
  createdAt: string;
  mergedAt?: string;
  comments: {
    totalCount: number;
  };
  labels: {
    totalCount: number;
    nodes: Label[];
  };
  state: string;
};

export interface PullRequestProps {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: PullRequestData[];
}

export interface PullRequests {
  milestones: {
    nodes: MilestoneProps[];
    pageInfo: PageInfo;
    totalCount: number;
  };
  labels: {
    totalCount: number;
    nodes: Label[];
  };
  openPullRequest: PullRequestProps;
  closedPullRequest: PullRequestProps;
}

export interface PullRequest {
  id?: string;
  login: string;
  commentCount: number;
  labelCount: number;
  labels: Label[];
  title: string;
  number: number;
  closed?: boolean;
  merged?: boolean;
  createdAt: string;
  closedAt: string;
  mergedAt: string;
  state: string;
  url: string;
}

export interface PullRequestResp {
  milestones?: MilestoneProps[];
  labels?: Label[];
  openPullRequest: IPullRequestsParse;
  closedPullRequest: IPullRequestsParse;
}
