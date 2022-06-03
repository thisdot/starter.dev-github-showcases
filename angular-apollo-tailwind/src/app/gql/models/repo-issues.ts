import { Label, Milestone, PageInfo } from '../github.schema';

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
