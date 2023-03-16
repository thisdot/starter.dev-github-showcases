import { Label } from './label-type';
// export type CardType = 'issue' | 'pr';

export interface IssuePullRequestCardProps {
  number: string;
  title: string;
  cardType: string;
  url: string;
  state: string;
  createdAt: string;
  authorName: string;
  commentCount: number;
  labels: Label[];
  isOpen?: boolean;
}
