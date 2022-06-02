export interface Repo {
  id: string;
  name: string;
  owner: {
    login: string
  }
  description?: string | null;
  languageColor?: string | null;
  language?: string | null;
  visibility: string;
  isArchived: boolean;
  isFork: boolean;
  stargazers_count: number;
  forks_count: number;
  updated_at: any;
}
