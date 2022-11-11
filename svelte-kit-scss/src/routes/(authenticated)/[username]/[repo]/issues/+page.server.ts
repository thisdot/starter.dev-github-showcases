import type { PageServerLoad } from './$types';
import { mapIssuesResToIssueState } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import type { IssuesAPIResponse } from '$lib/interfaces';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { username, repo } = params;

  const getIssuesOpenUrl = new URL('/search/issues', ENV.GITHUB_URL);
  getIssuesOpenUrl.searchParams.append('q', `repo:${username}/${repo}+type:issue+state:open`);

  const getIssuesClosedUrl = new URL('/search/issues', ENV.GITHUB_URL);
  getIssuesOpenUrl.searchParams.append('q', `repo:${username}/${repo}+type:issue+state:closed`);

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
      openIssues: mapIssuesResToIssueState(openIssues).issues,
      closedIssues: mapIssuesResToIssueState(closedIssues).issues,
    };
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {};
  }
};
