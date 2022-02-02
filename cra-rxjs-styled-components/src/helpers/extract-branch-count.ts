import { Observable, of } from 'rxjs';

/**
 * If we ever need more information from the link header, we could use  https://github.com/thlorenz/parse-link-header
 */
const BRANCH_COUNT_FROM_LAST_PAGE_REGEX = new RegExp('([\\d]*)>; rel="last"');

export function extractBranchCount(response: Response): Observable<number> {
  const linkHeader = response.headers.get('link') || '';
  const [, match] = (linkHeader.match(BRANCH_COUNT_FROM_LAST_PAGE_REGEX) || [, '0']) as string[];
  const count = parseInt(match, 10);
  return of(count);
}

export function sanitizeBranchesUrl(url: string): string {
  return `${url.replace('{/branch}', '')}?per_page=1`;
}
