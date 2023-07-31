import { Label } from './label-type';
import { PageInfo as UserPageInfo } from './user-repos-type';

export interface MilestoneProps {
  id: string;
  closed: boolean;
  description: string;
  number: number;
  title: string;
}

export type PageInfo = UserPageInfo;

export interface IssueProps {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: IssueNodeProps[];
}

export interface IssueNodeProps {
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

export interface IssuesInfo {
  repository: {
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
  };
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

export type Variables = {
  owner: string;
  name: string;
  orderBy?: string;
  direction?: string;
  filterBy?: {
    assignee?: string;
    createdBy?: string;
    mentioned?: string;
    milestone?: string;
    labels?: string[];
    states?: 'OPEN' | 'CLOSED';
  };
  before?: string;
  after?: string;
  first?: number;
  last?: number;
};

export type Response = {
  data: IssuesInfo;
};
