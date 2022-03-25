export interface RepoDetails {
  id?: string;
  isPrivate?: boolean;
  stargazerCount?: number;
  forkCount?: number;
  description?: string | null;
  homepageUrl?: string | null;
  watcherCount?: number;
  openIssueCount?: number;
  openPullRequestCount?: number;
  topics: string[];
}

export interface RepoPage {
  name: string;
  owner: string;
  login: string;
  branch: string;
  path: string;
  repository?: RepoDetails;
}
