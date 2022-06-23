export interface PullRequest {
  login?: string | null;
  title: string;
  number: number;
  closedAt?: Date | null;
  createdAt: Date;
  commentCount: number;
}
