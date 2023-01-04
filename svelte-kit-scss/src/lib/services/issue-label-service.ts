import { ENV } from '$lib/constants/env';
import { remapIssueLabel } from '$lib/helpers';
import type { IssueLabel } from '$lib/interfaces';
import type { GithubIssueLabel } from '$lib/interfaces/data-contract/github';

import { AbstractFetchService } from './abstract-fetch-service';

export class IssueLabelService extends AbstractFetchService {
  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

  async getLabelsForRepository(ownerLogin: string, repositoryName: string): Promise<IssueLabel[]> {
    const getItemsUrl = new URL(`/repos/${ownerLogin}/${repositoryName}/labels`, ENV.GITHUB_URL);
    getItemsUrl.searchParams.append('per_page', String(100));

    const items = await this.rejectableFetchJson<GithubIssueLabel[]>(getItemsUrl);
    return items.map(remapIssueLabel);
  }
}
