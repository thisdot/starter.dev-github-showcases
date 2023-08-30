export interface Label {
  color: string | undefined;
  name: string | undefined
}

export interface Issue {
  id: string;
  login?: string | null;
  commentCount: number;
  labelCount: number;
  labels: Label[];
  closed: boolean;
  title: string;
  number: number;
  createdAt: Date;
  closedAt?: Date | null;
}

export interface Milestone {
  id: string;
  closed: boolean;
  description?: string | null;
  number: number;
  title: string;
}
