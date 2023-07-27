import { ENV } from '$lib/constants/env';
import { remapIssueMilestone } from '$lib/helpers';
import {
  GithubIssueMilestoneStateFilter,
  type GithubIssueMilestone,
  type IssueMilestone,
} from '$lib/interfaces';
import { AbstractFetchService } from './abstract-fetch-service';

const SEARCH_PARAMS = {
  STATE: 'state',
};

export class IssueMilestoneService extends AbstractFetchService {
  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

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

    const items = await this.rejectableFetchJson<GithubIssueMilestone[]>(getItemsUrl);

    return items;
  }
}
