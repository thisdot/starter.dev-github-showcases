import { ApolloQueryResult } from '@apollo/client/core';
import { RepoDetails } from '.';

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

export interface FileExplorer extends ApolloQueryResult<FileExplorerData> {
  items: TreeEntry[];
  owner: string;
  name: string;
  basePath: string;
  branch: string;
  description: string;
  isPrivate: boolean;
  stargazers: number;
  forks: number;
  watchers: number;
}

export interface TreeEntry {
  name: string;
  type: string;
  path: string;
}
