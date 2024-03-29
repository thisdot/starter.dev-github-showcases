export interface Repo {
  id: string;
  name: string;
  description?: string | null;
  languageColor?: string | null;
  language?: string | null;
  isPrivate: boolean;
  isArchived: boolean;
  isFork: boolean;
  owner: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

export interface TopRepo extends Omit<Repo, 'isFork' | 'isArchived'> {}
