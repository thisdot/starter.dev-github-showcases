/**
 * Contains the only relevant properties.
 *
 * [`Github API: Repositories > Get a repository > Response schema > owner`](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)
 */
export type GithubSimpleUser = {
  avatar_url: string;
  email?: string | null;
  id: number;
  login: string;
  name?: string | null;
  site_admin: boolean;
  starred_at?: string;
  type: string;
  url: string;
};
