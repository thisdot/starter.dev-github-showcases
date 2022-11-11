import type { PageServerLoad } from './$types';
import { remapRepoIssue } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import type { IssuesAPIResponse } from '$lib/interfaces';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { username, repo } = params;

  const getIssuesOpenUrl = new URL(
    `/search/issues?q=repo:${username}/${repo}+type:issue+state:open`,
    ENV.GITHUB_URL
  );

  const getIssuesClosedUrl = new URL(
    `/search/issues?q=repo:${username}/${repo}+type:issue+state:closed`,
    ENV.GITHUB_URL
  );

  try {
    const [openIssues, closedIssues] = await Promise.all([
      fetch(getIssuesOpenUrl.toString()).then(
        (response) => response.json() as Promise<IssuesAPIResponse>
      ),
      fetch(getIssuesClosedUrl.toString()).then(
        (response) => response.json() as Promise<IssuesAPIResponse>
      ),
    ]);
    return {
      openIssues: openIssues.items.map((item) => remapRepoIssue(item)),
      closedIssues: closedIssues.items.map((item) => remapRepoIssue(item)),
    };
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {};
  }
};
