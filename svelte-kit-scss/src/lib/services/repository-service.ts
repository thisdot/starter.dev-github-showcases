import { ENV } from '$lib/constants/env';
import type { GithubRepository } from '$lib/interfaces/data-contract/github';
import type { Repository, RepositoryState } from '$lib/interfaces';
import { remapRepository, buildRepositoryState } from '$lib/helpers';
import { IssuesSearchService } from '$lib/services';
import { AbstractFetchService } from './abstract-fetch-service';
import {
  IssueSearchQueryState,
  IssueSearchQueryType,
} from '$lib/constants/issues-search-query-filters';
import {
  buildFilterParameter,
  SEARCH_QUERY_PARAMETER_QUALIFIER,
} from '$lib/helpers/issues-search-query-builder';
import type { RepositorySortFilters } from '$lib/enums/repositories';
import type { NonNegativeIntegerRange } from '$lib/interfaces/type-utls';

type RepositoryRequestOptions = {
  sort?: RepositorySortFilters;
  pagination?: {
    perPage: NonNegativeIntegerRange<1, 200>;
  };
};

export class RepositoryService extends AbstractFetchService {
  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

  /**
   * List repositories for the authenticated user
   * @returns Github Repository
   */
  async getAuthenticatedUserRepositories(
    options?: RepositoryRequestOptions
  ): Promise<Repository[]> {
    const githubPathname = `/user/repos`;
    return this.getRepositoriesInternal(githubPathname, options);
  }

  /**
   * List repositories for the user
   * @param username User login
   * @param options Request options
   * @returns
   */
  async getUserRepositories(
    username: string,
    options?: RepositoryRequestOptions
  ): Promise<Repository[]> {
    const githubPathname = `/users/${username}/repos`;
    return this.getRepositoriesInternal(githubPathname, options);
  }

  private async getRepositoriesInternal(
    githubPathname: string,
    options?: RepositoryRequestOptions
  ): Promise<Repository[]> {
    const url = new URL(githubPathname, ENV.GITHUB_URL);
    const sort = options?.sort;
    if (sort) {
      url.searchParams.append('sort', sort);
    }
    const perPage = options?.pagination?.perPage;
    if (perPage) {
      url.searchParams.append('per_page', String(perPage));
    }
    const repos = await this.rejectableFetchJson<GithubRepository[]>(url);
    return repos.map(remapRepository);
  }

  /**
   * Get the Repository State for the user
   * @param username User login
   * @param repositoryName Repository name
   * @returns Repository
   */
  async getUserRepositoryState(username: string, repo: string): Promise<RepositoryState> {
    const repository = await this.getUserRepository(username, repo);
    const issueService = new IssuesSearchService(this.fetch);
    const openPullsQuery = [
      IssueSearchQueryState['Open'],
      IssueSearchQueryType['PullRequest'],
      buildFilterParameter(SEARCH_QUERY_PARAMETER_QUALIFIER.REPO, `${username}/${repo}`),
    ].join(' ');
    const openPullsCount = await issueService.getIssuesCount(openPullsQuery);
    return buildRepositoryState(repository, openPullsCount);
  }

  /**
   * Get the Repository for the user
   * @param username User login
   * @param repositoryName Repository name
   * @returns Repository
   */
  private async getUserRepository(username: string, repo: string): Promise<Repository> {
    const url = new URL(`/repos/${username}/${repo}`, ENV.GITHUB_URL);
    const repository = await this.rejectableFetchJson<GithubRepository>(url);
    return remapRepository(repository);
  }
}
