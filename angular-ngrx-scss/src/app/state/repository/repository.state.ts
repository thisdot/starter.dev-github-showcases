import { UserApiResponse } from '../user';

export interface RepoState {
  description: string;
  forkCount: number;
  issueCount: number;
  ownerName: string;
  prCount: number;
  readme: string;
  repoName: string;
  starCount: number;
  tags: string[];
  tree: RepoContents[];
  // TODO: update this type
  pullRequests: Partial<PullRequestAPIResponse[]>;
  activeBranch: string;
  selectedFile: FileContents | null;
  visibility: string;
  watchCount: number;
  website: string;
}

export interface RepoApiResponse {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: UserApiResponse;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: 'string;';
  homepage: string;
  language: null;
  forks_count: number;
  forks: number;
  stargazers_count: number;
  watchers_count: number;
  watchers: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  open_issues: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  permissions: {
    pull: boolean;
    push: boolean;
    admin: boolean;
  };
  allow_rebase_merge: boolean;
  temp_clone_token: string;
  allow_squash_merge: boolean;
  allow_auto_merge: boolean;
  delete_branch_on_merge: boolean;
  allow_merge_commit: boolean;
  subscribers_count: number;
  network_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
}

export interface RepoContents {
  name: string;
  type: string;
  path: string;
}

export interface RepoContentsApiResponse {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

export interface FileContentsApiResponse extends RepoContentsApiResponse {
  content: string;
  encoding: string;
}

export type FileContents = Pick<
  FileContentsApiResponse,
  'content' | 'name' | 'type' | 'size'
>;

export interface ReadmeApiResponse {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

export interface PullRequestAPIResponse {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  number: number;
  state: string;
  locked: true;
  title: string;
  user: {
    login: string;
    id: 1;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  body: string;
  labels: Array<{
    id: number;
    node_id: string;
    url: string;
    name: string;
    description: string;
    color: string;
    default: boolean;
  }>;
}
