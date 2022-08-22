export interface TopRepo {
  id: string;
  name: string;
  description?: string | null;
  owner: string;
  language?: string | null;
  languageColor?: string | null;
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}
