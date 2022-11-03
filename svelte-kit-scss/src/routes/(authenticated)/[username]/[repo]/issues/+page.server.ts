import type { PageServerLoad } from './$types';
import { mapIssuesResToIssueState } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import type { IssuesAPIResponse } from '$lib/interfaces';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { username, repo } = params;

  try {
    const [openIssues, closedIssues] = await Promise.all([
      fetch(
        `${ENV.GITHUB_URL}/search/issues?q=repo:${username}/${repo}+type:issue+state:open`
      ).then((response) => response.json() as Promise<IssuesAPIResponse>),
      fetch(
        `${ENV.GITHUB_URL}/search/issues?q=repo:${username}/${repo}+type:issue+state:closed`
      ).then((response) => response.json() as Promise<IssuesAPIResponse>),
    ]);
    return {
      openIssues: mapIssuesResToIssueState(openIssues).issues,
      closedIssues: mapIssuesResToIssueState(closedIssues).issues,
    };
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {};
  }
};
