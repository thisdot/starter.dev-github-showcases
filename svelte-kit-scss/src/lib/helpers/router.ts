import type { IssueSearchTypePage } from '$lib/constants/matchers';
import type { GithubSimpleUser, Repository } from '$lib/interfaces';

export const resolveRepositoryHref = (repository: Pick<Repository, 'owner' | 'name'>): string =>
  `/${repository.owner.login}/${repository.name}`;
export const resolveRepositoryIssueSearchPageHref = (
  repository: Pick<Repository, 'owner' | 'name'>,
  issueSearchTypePage: IssueSearchTypePage
): string => [resolveRepositoryHref(repository), issueSearchTypePage].join('/');

export const resolveUserHref = (user: GithubSimpleUser): string => `/${user.login}`;
