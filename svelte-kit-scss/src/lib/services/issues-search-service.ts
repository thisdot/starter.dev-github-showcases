import { ENV } from '$lib/constants/env';
import { remapIssue } from '$lib/helpers';
import type { GithubSearchIssueApiResponse, Issue } from '$lib/interfaces';
import { error } from '@sveltejs/kit';

const SEARCH_PARAM_NAME_QUERY = 'q';
const SEARCH_PARAM_NAME_PAGE = 'page';
const SEARCH_PARAM_NAME_PER_PAGE = 'per_page';

type IssuesSearchPaginationInfo = {
  page?: number | null;
  perPage?: number;
};

export class IssuesSearchService {
  constructor(
    private fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
    private perPage = 30
  ) {}

  async getIssuesCount(searchQuery: string): Promise<number> {
    const data = await this.requestIssues(searchQuery, { perPage: 1 });
    return data.total_count;
  }

  async getIssues(
    searchQuery: string,
    paginationInfo?: IssuesSearchPaginationInfo
  ): Promise<Issue[]> {
    const responseData = await this.requestIssues(
      searchQuery,
      this.ensurePaginationInfo(paginationInfo)
    );
    console.log(
      '[getIssues]',
      responseData.items.filter((x) => x.number === 909)
    );
    return responseData.items.map(remapIssue);
  }

  private async requestIssues(
    searchQuery: string,
    paginationInfo?: IssuesSearchPaginationInfo
  ): Promise<GithubSearchIssueApiResponse> {
    const getItemsUrl = new URL(`/search/issues`, ENV.GITHUB_URL);
    getItemsUrl.searchParams.append(SEARCH_PARAM_NAME_QUERY, searchQuery);
    if (paginationInfo?.perPage) {
      getItemsUrl.searchParams.append(SEARCH_PARAM_NAME_PER_PAGE, String(paginationInfo?.perPage));
    }
    if (paginationInfo?.page) {
      getItemsUrl.searchParams.append(SEARCH_PARAM_NAME_PAGE, String(paginationInfo?.page));
    }
    const response = await this.fetch(getItemsUrl.toString());
    if (!response.ok) {
      const body = await response.json();
      throw error(response.status, body?.message || response.statusText);
    }
    const responseBodyJson = (await response.json()) as Promise<GithubSearchIssueApiResponse>;
    return responseBodyJson;
  }

  private ensurePaginationInfo(
    paginationInfo?: IssuesSearchPaginationInfo
  ): IssuesSearchPaginationInfo {
    const extras = !paginationInfo?.perPage ? { perPage: this.perPage } : undefined;
    return { ...paginationInfo, ...extras };
  }
}
