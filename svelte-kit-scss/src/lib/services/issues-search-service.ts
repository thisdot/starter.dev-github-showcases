import { ENV } from '$lib/constants/env';
import { remapCollectionPage, remapIssue } from '$lib/helpers';
import type {
  CollectionPage,
  GithubCollectionPage,
  GithubSearchIssue,
  Issue,
} from '$lib/interfaces';
import type { NonNegativeIntegerRange } from '$lib/interfaces/type-utls';
import { AbstractFetchService } from './abstract-fetch-service';

const SEARCH_PARAM_NAME_QUERY = 'q';
const SEARCH_PARAM_NAME_PAGE = 'page';
const SEARCH_PARAM_NAME_PER_PAGE = 'per_page';

type IssuesSearchPaginationInfo = {
  page?: number | null;
  perPage?: NonNegativeIntegerRange<1, 100>;
};

export class IssuesSearchService extends AbstractFetchService {
  private readonly endpoint = '/search/issues';

  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

  async getIssuesCount(searchQuery: string): Promise<number> {
    const data = await this.requestIssuesInternal(searchQuery, { perPage: 1 });
    return data.totalCount;
  }

  async getIssuesCollection(
    searchQuery: string,
    paginationInfo?: IssuesSearchPaginationInfo
  ): Promise<CollectionPage<Issue>> {
    const collectionPage = await this.requestIssuesInternal(searchQuery, paginationInfo);
    return collectionPage;
  }

  private async requestIssuesInternal(
    searchQuery: string,
    paginationInfo?: IssuesSearchPaginationInfo
  ): Promise<CollectionPage<Issue>> {
    const url = new URL(this.endpoint, ENV.GITHUB_URL);
    url.searchParams.append(SEARCH_PARAM_NAME_QUERY, searchQuery);
    if (paginationInfo?.perPage) {
      url.searchParams.append(SEARCH_PARAM_NAME_PER_PAGE, String(paginationInfo?.perPage));
    }
    if (paginationInfo?.page) {
      url.searchParams.append(SEARCH_PARAM_NAME_PAGE, String(paginationInfo?.page));
    }

    const collectionPage = await this.rejectableFetchJson<GithubCollectionPage<GithubSearchIssue>>(
      url
    );
    return remapCollectionPage(collectionPage, remapIssue);
  }
}
