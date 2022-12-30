import { Label } from '../repo-pulls/types';
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
