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
  branches: RepoBranches;
  tree: RepoTree;
}

export interface ReportHeader extends ApolloQueryResult<FileExplorerData> {
  owner: string;
  name: string;
  basePath: string;
  isPrivate: boolean;
  stargazers: number;
  forks: number;
  watchers: number;
}

export interface FileExplorer extends ApolloQueryResult<FileExplorerData> {
  owner: string;
  name: string;
  items: TreeEntry[];
  basePath: string;
  path?: string;
  branch: string;
  description: string;
}

export interface TreeEntry {
  name: string;
  type: string;
  path: string;
}
