import type { PageServerLoad } from './$types';
import { mapIssuesResToIssueState } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import type { IssuesAPIResponse } from '$lib/interfaces';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { username, repo } = params;

  const issuesOpenURL = new URL(
    `/search/issues?q=repo:${username}/${repo}+type:issue+state:open`,
    ENV.GITHUB_URL
  );
  const issuesCloseURL = new URL(
    `/search/issues?q=repo:${username}/${repo}+type:issue+state:closed`,
    ENV.GITHUB_URL
  );

  try {
    const [openIssues, closedIssues] = await Promise.all([
      fetch(issuesOpenURL.toString()).then(
        (response) => response.json() as Promise<IssuesAPIResponse>
      ),
      fetch(issuesCloseURL.toString()).then(
        (response) => response.json() as Promise<IssuesAPIResponse>
      ),
    ]);
    console.log(openIssues);
    return {
      openIssues: mapIssuesResToIssueState(openIssues).issues,
      closedIssues: mapIssuesResToIssueState(closedIssues).issues,
    };
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {};
  }
};
