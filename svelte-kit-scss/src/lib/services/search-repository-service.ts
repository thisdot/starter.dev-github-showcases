import { ENV } from '$lib/constants/env';
import { RepositorySearchSort, RepositorySearchType } from '$lib/constants/repository-search';
import { remapRepository, remapCollectionPage } from '$lib/helpers';
import type {
  CollectionPage,
  RepositorySearchQueryParameters,
  RepositorySearchResultItem,
} from '$lib/interfaces';
import type {
  GithubCollectionPage,
  GithubRepositorySearchResultItem,
} from '$lib/interfaces/data-contract/github';

import { AbstractFetchService } from './abstract-fetch-service';

const MAP_SORT = new Map([
  [RepositorySearchSort.LastUpdated, 'sort:updated'],
  [RepositorySearchSort.Name, 'sort:name-asc'],
  [RepositorySearchSort.Stars, 'sort:stars'],
]);

const MAP_TYPE = new Map([
  [RepositorySearchType.Public, 'is:public'],
  [RepositorySearchType.Private, 'is:private'],
  [RepositorySearchType.Sources, 'source:true'],
  [RepositorySearchType.Forks, 'fork:only'],
  [RepositorySearchType.Archived, 'archived:true'],
  [RepositorySearchType.Mirrors, 'mirror:true'],
  [RepositorySearchType.Templates, 'is_template:true'],
]);

export class RepositorySearchService extends AbstractFetchService {
  private readonly endpoint = '/search/repositories';

  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
  }

  /**
   * Find repositories via various criteria.
   *
   * *This method returns up to 100 results per page.*
   * @param username User login
   * @param params Criteria
   * @returns Search result
   */
  async searchRepositoriesForUser(
    username: string,
    params: RepositorySearchQueryParameters
  ): Promise<CollectionPage<RepositorySearchResultItem>> {
    const query = this.buildRepositorySearchRequestQueryForUser(username, params);
    console.log(query);
    const url = new URL(this.endpoint, ENV.GITHUB_URL);
    url.searchParams.append('q', query);
    const collectionPage = await this.rejectableFetchJson<
      GithubCollectionPage<GithubRepositorySearchResultItem>
    >(url);
    return remapCollectionPage(collectionPage, remapRepository);
  }

  private buildRepositorySearchRequestQueryForUser(
    username: string,
    params: RepositorySearchQueryParameters
  ): string {
    const { language, sort, term, type } = params;
    const parts = [`user:${username}`];
    if (language) {
      parts.push(`language:${language}`);
    }
    if (term) {
      parts.push(`"${term}" in:name`);
    }
    const sortValue = sort ? MAP_SORT.get(sort) : null;
    if (sortValue) {
      parts.push(sortValue);
    }
    const typeValue = type ? MAP_TYPE.get(type) : null;
    if (typeValue) {
      parts.push(typeValue);
    }
    return parts.join(' ');
  }
}
