import type { Blob, RepoReadMeQuery } from '@lib/github';

export function parseQuery(data: RepoReadMeQuery) {
  const readme = data.repository?.readme as Blob;
  return readme?.text ?? undefined;
}
