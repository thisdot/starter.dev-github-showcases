export type PullRequestData = {
  node: {
    author: { login: string | null };
    title: string;
    url: string;
    number: number;
    closedAt?: string | null;
    createdAt: string;
    comments: {
      totalCount: number;
    };
    state: string;
  };
};

export interface PullRequest {
  openPullRequest: {
    edges: PullRequestData[];
  };
  closedPullRequest: {
    edges: PullRequestData[];
  };
}
