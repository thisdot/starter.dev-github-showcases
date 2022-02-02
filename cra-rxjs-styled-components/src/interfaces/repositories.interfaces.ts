export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  private: boolean;
  html_url: string;
  url: string;
  updated_at: string;
  stargazers_count: number;
  language: string;
  branches_url: string;
}

export interface RepositoryWithBranchCount extends Repository {
  branches_count: number;
}
