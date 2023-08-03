import type { GithubSimpleUser } from './common';

/** Github API schema: Repository > permissions
 *
 * **Note**: github-specific `*_url` properties excluded.
 */
export type GithubRepositoryPermissions = {
  admin: boolean;
  maintain?: boolean;
  pull: boolean;
  push: boolean;
  triage?: boolean;
};

/** Github API schema: Repository > License Simple
 *
 * **Note**: github-specific `*_url` properties excluded.
 */
export type GithubRepositoryLicenseSimple = {
  key: string;
  name: string;
  spdx_id: string | null;
  url: string | null;
};

export type GithubRepositoryCodeOfConduct = {
  body?: string;
  key: string;
  name: string;
  url: string;
};

/** Github API schema: Repository > Minimal Repository
 *
 * **Note**: github-specific `*_url` properties excluded.
 */
export type GithubRepository = {
  allow_forking?: boolean;
  archived: boolean;
  code_of_conduct?: GithubRepositoryCodeOfConduct;
  created_at: string | null;
  default_branch: string;
  delete_branch_on_merge?: boolean;
  description: string | null;
  disabled: boolean;
  fork: boolean;
  forks_count: number;
  forks: number;
  full_name: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string | null;
  id: number;
  is_template: boolean;
  language: string | null;
  license: GithubRepositoryLicenseSimple | null;
  name: string;
  network_count?: number;
  open_issues_count: number;
  open_issues: number;
  owner: GithubSimpleUser;
  permissions: GithubRepositoryPermissions;
  private: boolean;
  pushed_at: string | null;
  role_name?: string;
  size: number;
  stargazers_count: number;
  subscribers_count?: number;
  temp_clone_token?: string;
  topics: string[];
  updated_at: string | null;
  url: string;
  visibility: string;
  watchers_count: number;
  watchers: number;
  web_commit_signoff_required: boolean;
};
