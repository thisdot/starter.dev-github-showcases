import { UrlSegment } from '@angular/router';

export const getPathSegments = (segments: UrlSegment[]): string[] =>
  segments.map(({ path }: UrlSegment) => path);

export const isOrgPath = (path: string) => {
  return path === 'orgs';
};
