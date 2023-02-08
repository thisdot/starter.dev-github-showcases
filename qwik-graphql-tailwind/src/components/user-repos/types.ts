export interface UserReposProps {
  owner: string;
}

export interface Repositories {
  nodes: UserRepo[];
  pageInfo:
    | {
        __typename?: 'PageInfo';
        endCursor?: string;
        startCursor?: string;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      }
    | undefined;
}

export interface UserRepo {
  id: string;
  name: string;
  description?: string | null;
  languageColor?: string | null;
  primaryLanguage: {
    id: string;
    color: string;
    name: string;
  } | null;
  isPrivate: boolean;
  isArchived: boolean;
  isFork: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: any;
}
