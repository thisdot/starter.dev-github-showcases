import { Label } from '~/context/pull-request-store';
import { LabelProps, MilestoneProps, PageInfo } from '~/types';

export type IssuesQuery = {
  repository: {
    milestones: MilestoneProps;
    labels: LabelProps;
    openIssues: IssueProps;
    closedIssues: IssueProps;
  };
};

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

export interface Issue {
  url: string;
  closedAt: string;
  commentCount: number;
  labels: Label[];
  createdAt: string;
  number: number;
  state: string;
  title: string;
  login: string;
}

export interface ParsedIssue {
  issues: Issue[];
  totalCount: number;
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean };
}

export interface ParsedIssueQuery {
  openIssues: ParsedIssue;
  closedIssues: ParsedIssue;
  labels: Label[];
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  closed: boolean;
  description?: string | null;
  number: number;
  title: string;
}

export enum IssueOrderField {
  /** Order issues by comment count */
  Comments = 'COMMENTS',
  /** Order issues by creation time */
  CreatedAt = 'CREATED_AT',
  /** Order issues by update time */
  UpdatedAt = 'UPDATED_AT',
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}
