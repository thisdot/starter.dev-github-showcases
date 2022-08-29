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

export type IssueType = 'issue' | 'pr';

export type IssueState = 'open' | 'closed';
