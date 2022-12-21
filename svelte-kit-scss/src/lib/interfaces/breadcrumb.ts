export interface Breadcrumb {
  name: string;
  href: string;
}

export interface BreadcrumbData {
  username: string;
  repo: string;
  breadcrumbs: Breadcrumb[];
}
