export interface Issue {
  url: string;
  closedAt: string;
  comments: {
    totalCount: number;
  };
  createdAt: string;
  number: number;
  state: string;
  title: string;
  author: {
    login: string;
  };
}
