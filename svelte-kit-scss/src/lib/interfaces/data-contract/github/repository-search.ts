import type { GithubRepository } from './repository';

/** Github API schema: Repository > Repo Search Result Item
 *
 * **Note**: github-specific `*_url` properties excluded.
 */
export type GithubRepositorySearchResultItem = GithubRepository & {
  score: number;
};
