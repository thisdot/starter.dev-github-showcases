export interface IssueUser {
  login: string;
  avatar_url: string;
  gravatar_id: string;
  type: string;
  site_admin: boolean;
}

export interface IssueLabel {
  name: string;
  description: string;
  color: string;
  default: boolean;
}

export interface Issue {
  number: number;
  state: string;
  title: string;
  body: string;
  user: IssueUser;
  labels: IssueLabel[];
  assignee: IssueUser;
  assignees: IssueUser[];
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  closed_at?: string;
  created_at: string;
  updated_at: string;
  closed_by: IssueUser;
}

export type Issues = Array<Issue>;

export interface RepositoryIssuesApiParams {
  milestone?: string;
  state?: 'open' | 'closed' | 'all';
  assignee?: string;
  creator?: string;
  mentioned?: string;
  labels?: string;
  sort?: 'created' | 'updated' | 'comments';
  direction?: 'asc' | 'desc';
  since?: string;
  per_page?: number;
  page?: number;
}
