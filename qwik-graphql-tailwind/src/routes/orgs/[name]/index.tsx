import { component$, useClientEffect$ } from '@builder.io/qwik';
import { OrgProfileCard } from './org-profile-card';

import { ORG_REPOS_QUERY } from '~/utils/queries/org-repos-query';
import { useQuery } from '~/utils';
import { GITHUB_GRAPHQL } from '~/utils/constants';

interface OrgRepoQueryParams {
  organization: string;
  first: number;
}

export default component$(() => {
  useClientEffect$(async () => {
    // const abortController = new AbortController();
    // const response = await fetchUserProfile(location.params.user, abortController);
    //updateUserProfile(store, response);
  });

  return (
    <div>
      <OrgProfileCard />
    </div>
  );
});

export async function fetchOrgRepos({ organization, first }: OrgRepoQueryParams, abortController?: AbortController) {
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
