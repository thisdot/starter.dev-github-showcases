export interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: { login: string };
  description: string;
  private: boolean;
  html_url: string;
  url: string;
  updated_at: string;
  stargazers_count: number;
  language: string;
  branches_url: string;
  visibility: 'public' | 'private';
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  pulls: number;
  default_branch: string;
  homepage: string;
}

export interface RepositoryWithBranchCount extends Repository {
  branches_count: number;
}
