import { ApolloQueryResult } from '@apollo/client/core';

export interface FileExplorerData {
  repository: FileExplorerRepoDetails;
}

export interface FileExplorerVars {
  owner: string;
  name: string;
  expression: string;
}

export interface BranchesPrefix {
  refPrefix: string;
  last: number;
}

export interface RepoBranches {
  nodes: {
    name: string;
  };
}

export interface RepoTree {
  entries: TreeEntry[];
}

export interface FileExplorerRepoDetails {
  id: string;
  viewer: {
    login: string;
  };
  branches: RepoBranches;
  tree: RepoTree;
}

export interface ReportHeader extends ApolloQueryResult<FileExplorerData> {
  owner: string;
  name: string;
  login: string;
  isPrivate: boolean;
  stargazers: number;
  forks: number;
  watchers: number;
  openIssueCount: number;
  openPullRequestCount: number;
}

export interface FileExplorer extends ApolloQueryResult<FileExplorerData> {
  items: TreeEntry[];
  readme: string;
}

export interface TreeEntry {
  name: string;
  type: string;
  path: string;
}
