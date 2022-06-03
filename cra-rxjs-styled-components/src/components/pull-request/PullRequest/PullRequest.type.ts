export type PullRequest = {
  title: string;
  openedNum: string;
  openedDay: string;
  openedBy: string;
  status: 'open' | 'closed' | 'merged';
  messageCount: number;
};
