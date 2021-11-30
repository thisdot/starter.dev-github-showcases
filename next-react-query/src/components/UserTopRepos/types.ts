export interface TopRepo {
  id: string;
  name: string;
  owner: string;
  language?: string | null;
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}
