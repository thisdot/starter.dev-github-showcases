export interface RepoDetailsData {
  resository: RepoDetails;
}

export interface RepoDetailsVars {
  owner: string;
  name: string; // repo name
}

export interface RepoDetails {
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

export interface ResolvedRepoDetails {
  name: string;
  owner: string;
  error: any;
  loading: boolean;
  repository: RepoDetails;
}
