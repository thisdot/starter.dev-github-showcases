export type IssuesData = {
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
export interface Issues {
  openIssues: {
    edges: IssuesData[];
  };
  closedIssues: {
    edges: IssuesData[];
  };
}
