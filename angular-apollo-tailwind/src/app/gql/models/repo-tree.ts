import { TreeEntry } from '../github.schema';

export interface ReportHeader {
  owner: string;
  name: string;
  login: string;
  isPrivate?: boolean;
  stargazers?: number;
  forks?: number;
  watchers?: number;
  openIssueCount?: number;
  openPullRequestCount?: number;
}

export interface FileExplorer {
  items: TreeEntry[];
  readme: string;
}
