import { Label } from './label-type';
export type CardType = 'issue' | 'pr';

export interface IssuePullRequestCardProps {
  number: string;
  title: string;
  cardType: CardType;
  url: string;
  state: string;
  createdAt: Date;
  authorName: string;
  commentCount: number;
  labels: Label[];
  isOpen?: boolean;
}
