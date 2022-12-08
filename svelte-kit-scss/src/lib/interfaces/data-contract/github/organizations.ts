/** Github API schema: Organization Simple
 *
 * ***Note**: github-specific `*_url` properties excluded.*
 */
export type GithubOrganizationSimple = {
  avatar_url: string;
  description: string | null;
  id: number;
  login: string;
  node_id: string;
  url: string;
};
