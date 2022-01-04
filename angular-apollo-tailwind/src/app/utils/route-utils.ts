import { UrlSegment } from '@angular/router';

export const getPathSegments = (segments: UrlSegment[]): string[] =>
  segments.map(({ path }: UrlSegment) => path);
