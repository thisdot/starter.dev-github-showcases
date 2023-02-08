import { ENV } from '$lib/constants/env';
import { AbstractFetchService } from './abstract-fetch-service';
import type { GithubBranch } from '$lib/interfaces/data-contract/github';
import { remapBranch } from '$lib/helpers';
import type { Branch } from '$lib/interfaces';

export class BranchService extends AbstractFetchService {
  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

  async getBranchesForRepository(username: string, repositoryName: string): Promise<Branch[]> {
    const url = new URL(`/repos/${username}/${repositoryName}/branches`, ENV.GITHUB_URL);
    url.searchParams.append('per_page', String(100));

    const items = await this.rejectableFetchJson<GithubBranch[]>(url);
    return items.map(remapBranch);
  }
}
