export interface RepoDetailsData {
  defaultBranchRef: {
    name: string;
  };
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  description: string;
  watchers: {
    totalCount: number;
  };
}

export interface RepoDetailsVars {
  owner: string;
  name: string; // repo name
}
