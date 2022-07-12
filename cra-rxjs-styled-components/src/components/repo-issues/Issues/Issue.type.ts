export type Issue = {
  number: number;
  title: string;
  comments: number;
  labels: Label[];
  created_at: Date;
  closed_at: Date | null;
  user: User;
  url: string;
  state: 'open' | 'closed';
};

export type Label = {
  color: string;
  name: string;
};

export type User = {
  login: string;
};
