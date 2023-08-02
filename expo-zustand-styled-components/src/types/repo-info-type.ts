export type Topics = {
  topic: {
    name: string;
  };
};

export interface Info {
  isPrivate: boolean;
  visibility: string;
  forkCount: number;
  description: string;
  homepageUrl: string;
  stargazerCount: number;
  watcherCount: number;
  openIssueCount: number;
  topics: string[];
  isOrg: boolean;
  openPullRequestCount: number;
}

export interface RepoInfo {
  defaultBranchRef: {
    name: string;
  };
  isPrivate: boolean;
  visibility: string;
  stargazerCount: number;
  forkCount: number;
  description: string;
  homepageUrl: string;
  watchers: {
    totalCount: number;
  };
  issues: {
    totalCount: number;
  };
  pullRequests: {
    totalCount: number;
  };
  topics: {
    nodes: Topics[];
  };
  owner: {
    orgName: string;
    orgAvatarUrl: string;
  };
}

export type RepoInfoVariables = {
  owner: string;
  name: string;
};
