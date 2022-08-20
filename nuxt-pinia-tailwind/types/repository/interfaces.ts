import { IUser } from '../user/interfaces';

export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  owner: { login: string };
  description: string;
  private: boolean;
  html_url: string;
  url: string;
  updated_at: Date;
  stargazers_count: number;
  language: string;
  branches_url: string;
  visibility: 'public' | 'private';
  subscribers_count: number;
  forks_count: number;
  open_issues_count: number;
  pulls: number;
  default_branch: string;
  homepage: string;
  watchers_count: number;
}

export interface IPullRequest {
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
}

export interface IRepoContents {
  name: string;
  type: string;
  path: string;
}

export interface IBranch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}

export interface IReadme {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

export interface IRepositoryIssuesApiParams {
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

export interface IIssueLabel {
  name: string;
  description: string;
  color: string;
  default: boolean;
}

export interface IIssue {
  number: number;
  state: string;
  title: string;
  body: string;
  user: Partial<IUser>;
  labels: IIssueLabel[];
  assignee: Partial<IUser>;
  assignees: Partial<IUser>[];
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  closed_at?: string;
  created_at: string;
  updated_at: string;
  closed_by: Partial<IUser>;
}
