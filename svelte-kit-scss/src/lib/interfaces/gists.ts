export interface UserGistsState {
  url: string;
  fileName: string;
}

interface Files {
  [key: string]: {
    filename: string;
    type: string;
    language: string;
    raw_url: string;
    size: number;
  };
}

export interface UserGist {
  comments: number;
  comments_url: string;
  commits_url: string;
  created_at: string;
  forks_url: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  id: string;
  node_id: string;
  public: boolean;
  truncated: false;
  updated_at: string;
  url: string;
  description: string;
  files: Files;
}

export type UserGistsApiResponse = UserGist[];
