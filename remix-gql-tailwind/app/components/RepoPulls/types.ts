import type { Label } from '@components/RepoIssues/types';

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
