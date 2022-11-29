import { ENV } from '$lib/constants/env';
import { remapIssueMilestone } from '$lib/helpers';
import {
  GithubIssueMilestoneStateFilter,
  type GithubIssueMilestone,
  type IssueMilestone,
} from '$lib/interfaces';
import { error } from '@sveltejs/kit';

const SEARCH_PARAMS = {
  STATE: 'state',
};

export class IssueMilestoneService {
  constructor(
    private fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {}

  async getOpenMilestones(owner: string, repo: string): Promise<IssueMilestone[]> {
    const milestones = await this.requestMilestones(owner, repo, {
      state: GithubIssueMilestoneStateFilter.Open,
    });
    return milestones.map(remapIssueMilestone);
  }

  private async requestMilestones(
    owner: string,
    repo: string,
    parameters?: {
      state?: GithubIssueMilestoneStateFilter;
    }
  ): Promise<GithubIssueMilestone[]> {
    const getItemsUrl = new URL(`/repos/${owner}/${repo}/milestones`, ENV.GITHUB_URL);
    if (parameters?.state) {
      getItemsUrl.searchParams.append(SEARCH_PARAMS.STATE, parameters.state);
    }

    const response = await this.fetch(getItemsUrl.toString());
    if (!response.ok) {
      const body = await response.json();
      throw error(response.status, body?.message || response.statusText);
    }
    const responseBodyJson = (await response.json()) as Promise<GithubIssueMilestone[]>;
    return responseBodyJson;
  }
}
