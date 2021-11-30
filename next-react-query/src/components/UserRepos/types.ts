import { parseQuery } from './parseQuery';
export interface Repo {
  id: string;
  name: string;
  description?: string | null;
  languageColor?: string | null;
  language?: string | null;
  isPrivate: boolean;
  isArchived: boolean;
  isFork: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: any;
}

export type ParsedUserReposQuery = ReturnType<typeof parseQuery>;
