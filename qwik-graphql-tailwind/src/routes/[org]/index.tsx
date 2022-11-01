import { component$ } from '@builder.io/qwik';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { useQuery } from '~/utils/useQuery';
import * as styles from './user-page.classNames';
import { ORG_REPOS_QUERY } from '~/utils/queries/org-repos-query';

interface OrgRepoQueryParams {
  organization: string;
  first: number;
}

export default component$(() => {
  return <div className={styles.container}>Orgs</div>;
});

export async function fetchOrgRepos(
  { organization, first }: OrgRepoQueryParams,
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(ORG_REPOS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    variables: {
      organization,
      first,
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  return await resp.json();
}
