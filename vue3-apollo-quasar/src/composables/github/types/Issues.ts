export interface Issues {
  login?: string | null;
  title: string;
  number: number;
  closedAt?: Date | null;
  createdAt: Date;
  commentCount: number;
}