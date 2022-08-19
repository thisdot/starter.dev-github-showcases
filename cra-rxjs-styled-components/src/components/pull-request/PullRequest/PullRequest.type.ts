export type PullRequests = {
  total_count: number;
  incomplete_results: boolean;
  items: PullRequest[];
};

export type PullRequest = {
  title: string;
  number: string;
  created_at: string;
  user: {
    login: string;
  };
  state: 'open' | 'closed' | 'merged';
  messageCount: number;
  isMerged?: boolean;
  merged_at: string | null;
  review_comments_url: string;
  comments: any;
};
