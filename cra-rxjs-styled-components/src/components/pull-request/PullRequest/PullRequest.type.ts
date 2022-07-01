export type PullRequest = {
  title: string;
  openedNum: string;
  openedDay: string;
  openedBy: string;
  state: 'open' | 'closed' | 'merged';
  messageCount: number;
};
