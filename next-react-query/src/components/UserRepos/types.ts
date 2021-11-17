export interface Repo {
  id: string;
  name: string;
  description?: string | null;
  languageColor?: string | null;
  language?: string | null;
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: any;
}
