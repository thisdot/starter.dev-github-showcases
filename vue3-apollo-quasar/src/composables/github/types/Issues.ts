import { IIssueParse } from '@/helpers/parseIssue';
import { PageInfo } from '.';
import { Label } from './Label';
import { MilestoneProps } from './Milestones';

export type IssuesData = {
  author: { login: string };
  title: string;
  url: string;
  number: number;
  closedAt?: string | null;
  createdAt: string;
  comments: {
    totalCount: number;
  };
  labels: {
    totalCount: number;
    nodes: Label[];
  };
  state: string;
};

export interface IssueProps {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: IssuesData[];
}

export interface Issues {
  milestones: {
    nodes: MilestoneProps[];
    pageInfo: PageInfo;
    totalCount: number;
  };
  labels: {
    totalCount: number;
    nodes: Label[];
  };
  openIssues: IssueProps;
  closedIssues: IssueProps;
}

export interface Issue {
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

export interface IssueResp {
  milestones: MilestoneProps[];
  labels: Label[];
  openIssues: IIssueParse;
  closedIssues: IIssueParse;
}
