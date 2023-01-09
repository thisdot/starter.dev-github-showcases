import type { IssueSearchTypePage } from '$lib/constants/matchers';
import type { Breadcrumb } from '$lib/components/shared/Breadcrumbs/models';
import { composeDirHref } from './repository-contents';
import type { GithubSimpleUser, Repository } from '$lib/interfaces';
import { PARAMETER_NAME_PAGE } from '$lib/constants/router';

export const resolveRepositoryHref = (repository: Pick<Repository, 'owner' | 'name'>): string =>
  `/${repository.owner.login}/${repository.name}`;
export const resolveRepositoryIssueSearchPageHref = (
  repository: Pick<Repository, 'owner' | 'name'>,
  issueSearchTypePage: IssueSearchTypePage
): string => [resolveRepositoryHref(repository), issueSearchTypePage].join('/');

export const buildContentItemBreadcrumbs = (
  username: string,
  repo: string,
  branch: string,
  defaultBranch: string,
  folderPathSegments: string[],
  fileName?: string
): Breadcrumb[] => {
  let breadcrumbs = folderPathSegments.reduce((breadcrumbs, segment, index) => {
    const parentFolderPath = breadcrumbs[index - 1];
    const currentFolderPath = [parentFolderPath, segment].filter(Boolean).join('/');
    breadcrumbs.push({
      name: segment,
      href: composeDirHref(currentFolderPath, username, repo, branch, defaultBranch),
    });
    return breadcrumbs;
  }, [] as Breadcrumb[]);

  if (fileName) {
    breadcrumbs.push({
      name: fileName,
      emphasis: true,
    });
  }

  if (breadcrumbs.length) {
    breadcrumbs = [
      {
        name: repo,
        href: composeDirHref('/', username, repo, branch, defaultBranch),
        emphasis: true,
      },
      ...breadcrumbs,
    ];

    const last = breadcrumbs[breadcrumbs.length - 1];
    last.emphasis = true;
    last.href = undefined;
  }

  return breadcrumbs;
};
export const resolveUserHref = (user: GithubSimpleUser): string => `/${user.login}`;

export const buildPageUrl = (baseUrl: URL, pageNumber: number): URL => {
  const url = new URL(baseUrl);
  if (pageNumber < 2) {
    url.searchParams.has(PARAMETER_NAME_PAGE) && url.searchParams.delete(PARAMETER_NAME_PAGE);
  } else {
    url.searchParams.set(PARAMETER_NAME_PAGE, String(pageNumber));
  }
  return url;
};
