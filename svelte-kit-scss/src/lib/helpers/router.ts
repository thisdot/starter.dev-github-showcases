import type { Breadcrumb } from '$lib/components/shared/Breadcrumbs/models';
import type { Repository } from '$lib/interfaces';
import { composeDirHref } from './repository-contents';

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
        href: '/',
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
