export type GithubProfilePlan = {
  collaborators: number;
  name: string;
  private_repos: number;
  space: number;
};

/** Github API schema: Public User
 *
 * **Note**: github-specific `*_url` properties excluded.
 */
export type GithubPublicProfileInformation = {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  collaborators?: number;
  company: string | null;
  created_at: string;
  disk_usage: number;
  email: string | null;
  followers: number;
  following: number;
  gravatar_id: string | null;
  hireable: boolean | null;
  id: number;
  location: string | null;
  login: string;
  name: string | null;
  node_id: string;
  owned_private_repos?: number;
  plan?: GithubProfilePlan;
  private_gists?: number;
  public_gists: number;
  public_repos: number;
  site_admin: boolean;
  suspended_at?: string | null;
  total_private_repos?: number;
  twitter_username?: string | null;
  type: string;
  updated_at: string;
  url: string;
};

/** Github API schema: Private User
 *
 * **Note**: github-specific `*_url` properties excluded.
 */
export type GithubPrivateProfileInformation = GithubPublicProfileInformation & {
  business_plus?: boolean;
  collaborators: number;
  ldap_dn?: string;
  owned_private_repos: number;
  total_private_repos: number;
  two_factor_authentication: boolean;
};
