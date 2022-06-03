import { PageInfo } from '../github.schema';

export interface Repo {
  id: string;
  name: string;
  description?: string | null;
  languageColor?: string | null;
  language: string;
  isPrivate: boolean;
  isArchived: boolean;
  isFork: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
  routePath: string;
}

export interface Repos {
  owner: string;
  repos: Repo[];
  pageInfo: PageInfo;
}
