import type { PageServerLoad } from './$types';
import { remapRepoPullRequest } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import type { PullRequestAPIResponse } from '$lib/interfaces';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { username, repo } = params;

  const prOpenURL = new URL(
    `/search/issues?q=repo:${username}/${repo}+type:pr+state:open`,
    ENV.GITHUB_URL
  );
  const prCloseURL = new URL(
    `/search/issues?q=repo:${username}/${repo}+type:pr+state:closed`,
    ENV.GITHUB_URL
  );

  try {
    const [openPRs, closedPRs] = await Promise.all([
      fetch(prOpenURL.toString()).then(
        (response) => response.json() as Promise<PullRequestAPIResponse>
      ),
      fetch(prCloseURL.toString()).then(
        (response) => response.json() as Promise<PullRequestAPIResponse>
      ),
    ]);
    return {
      openPRs: remapRepoPullRequest(openPRs).pullRequests,
      closedPRs: remapRepoPullRequest(closedPRs).pullRequests,
    };
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {};
  }
};
