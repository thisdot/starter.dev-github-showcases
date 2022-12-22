import type { Breadcrumb } from '$lib/components/shared/Breadcrumbs/models';
import { composeDirHref } from './repository-contents';
import type { GithubSimpleUser, Repository } from '$lib/interfaces';

export const resolveRepositoryHref = (repository: Repository): string =>
  `/${repository.owner.login}/${repository.name}`;

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
