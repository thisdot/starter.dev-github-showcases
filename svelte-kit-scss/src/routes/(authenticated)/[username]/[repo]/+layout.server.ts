import { ENV } from '$lib/constants/env';
import type { LayoutServerLoad } from './$types';
import type { RepoApiResponse } from '$lib/interfaces';
import { mapRepoResToRepoState } from '$lib/helpers';
import { IssuesSearchService } from '$lib/services';
import {
  IssueSearchQueryState,
  IssueSearchQueryType,
} from '$lib/constants/issues-search-query-filters';
import { buildIssueSearchQuery } from '$lib/helpers/issues-search-query-builder';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
  const { username, repo } = params;
  const getRepoUrl = new URL(`/repos/${username}/${repo}`, ENV.GITHUB_URL);

  const repoData = await fetch(getRepoUrl.toString()).then(
    (response) => response.json() as Promise<RepoApiResponse>
  );

  const issueService = new IssuesSearchService(fetch);
  const openPullsQuery = buildIssueSearchQuery(
    [IssueSearchQueryState.Open, IssueSearchQueryType.PullRequest],
    `${username}/${repo}`
  );
  const openPullsCount = await issueService.getIssuesCount(openPullsQuery);

  return {
    username,
    repo,
    repoInfo: mapRepoResToRepoState(repoData, openPullsCount),
  };
};
