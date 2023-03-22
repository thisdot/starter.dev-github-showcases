import { Label } from './label-type';

export interface IssuePullRequestCardProps {
  number: string;
  title: string;
  cardType: string;
  url: string;
  state: string;
  createdAt: string;
  login: string;
  commentCount: number;
  labels: Label[];
}
