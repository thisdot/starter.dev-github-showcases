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
  repository_url: string;
  comments: any;
};

export type PullRequests = {
  total_count: number;
  items: PullRequest[];
};
