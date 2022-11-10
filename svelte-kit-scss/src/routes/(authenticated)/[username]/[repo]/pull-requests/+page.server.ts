import type { PageServerLoad } from './$types';
import { mapPRResToPRState } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import type { PullRequestAPIResponse } from '$lib/interfaces';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { username, repo } = params;

  try {
    const [openPRs, closedPRs] = await Promise.all([
      fetch(`${ENV.GITHUB_URL}/search/issues?q=repo:${username}/${repo}+type:pr+state:open`).then(
        (response) => response.json() as Promise<PullRequestAPIResponse>
      ),
      fetch(`${ENV.GITHUB_URL}/search/issues?q=repo:${username}/${repo}+type:pr+state:closed`).then(
        (response) => response.json() as Promise<PullRequestAPIResponse>
      ),
    ]);
    return {
      openPRs: mapPRResToPRState(openPRs).pullRequests,
      closedPRs: mapPRResToPRState(closedPRs).pullRequests,
    };
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {};
  }
};
