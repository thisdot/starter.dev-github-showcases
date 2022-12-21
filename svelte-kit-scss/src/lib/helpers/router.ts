import type { BreadcrumbData, Repository } from '$lib/interfaces';

export const resolveRepositoryHref = (repository: Repository): string =>
  `/${repository.owner.login}/${repository.name}`;

export const getBreadcrumbs = (
  username: string,
  repo: string,
  branch: string,
  folderPathSegments: string[]
): BreadcrumbData => {
  const basePath = `${username}/${repo}`;

  const breadcrumbs = folderPathSegments.map((crumb, i) => {
    const crumbPath = folderPathSegments.slice(0, i + 1).join('/');
    const href = `/${basePath}/tree/${branch}/${crumbPath}`;
    return {
      name: crumb,
      href: href,
    };
  });
  return {
    breadcrumbs,
    username,
    repo,
  };
};
