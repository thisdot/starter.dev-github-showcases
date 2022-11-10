import type { PageServerLoad } from './$types';
import { remapRepoPullRequest } from '$lib/helpers';
import { ENV } from '$lib/constants/env';
import type { PullRequestAPIResponse } from '$lib/interfaces';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { username, repo } = params;

  const getPRsOpenUrl = new URL('/search/issues', ENV.GITHUB_URL);
  getPRsOpenUrl.searchParams.append('q', `repo:${username}/${repo}+type:pr+state:open`);

  const getPRsClosedUrl = new URL('/search/issues', ENV.GITHUB_URL);
  getPRsOpenUrl.searchParams.append('q', `repo:${username}/${repo}+type:pr+state:closed`);

  try {
    const [openPRs, closedPRs] = await Promise.all([
      fetch(getPRsOpenUrl.toString()).then(
        (response) => response.json() as Promise<PullRequestAPIResponse>
      ),
      fetch(getPRsClosedUrl.toString()).then(
        (response) => response.json() as Promise<PullRequestAPIResponse>
      ),
    ]);
    return {
      openPRs: remapRepoPullRequest(openPRs.items),
      closedPRs: remapRepoPullRequest(closedPRs.items),
    };
  } catch (err) {
    // TODO: investigate better ways to handle and prompt users on errors
    return {};
  }
};
