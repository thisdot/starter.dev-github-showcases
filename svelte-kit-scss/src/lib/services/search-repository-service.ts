import { ENV } from '$lib/constants/env';
import { remapRepository } from '$lib/helpers';
import type { RepositorySearchResultItem } from '$lib/interfaces';
import type { GithubRepositorySearchResultItem } from '$lib/interfaces/data-contract/github';

import { AbstractFetchService } from './abstract-fetch-service';

export enum RepositorySearchType {
  Public = 'public',
  Private = 'private',
  Sources = 'sources',
  Forks = 'forks',
  Archived = 'archived',
  Mirrors = 'mirrors',
  Templates = 'templates',
}

export enum RepositorySearchSort {
  LastUpdated = 'updated',
  Name = 'name',
  Stars = 'stars',
}

const MAP_SORT = new Map([
  [RepositorySearchSort.LastUpdated, 'updated'],
  [RepositorySearchSort.Name, 'name-asc'],
  [RepositorySearchSort.Stars, 'stars'],
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

export type RepositorySearchQueryParameters = {
  language?: string;
  sort?: RepositorySearchSort;
  term?: string;
  type?: RepositorySearchType;
};

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
  ): Promise<RepositorySearchResultItem[]> {
    const query = this.buildRepositorySearchRequestQueryForUser(username, params);
    const url = new URL(this.endpoint, ENV.GITHUB_URL);
    url.searchParams.append('q', query);
    const items = await this.rejectableFetchJson<GithubRepositorySearchResultItem[]>(url);
    return items.map(remapRepository);
  }

  private buildRepositorySearchRequestQueryForUser(
    username: string,
    params: RepositorySearchQueryParameters
  ): string {
    const { language, sort, term, type } = params;
    const parts = [];
    if (language) {
      parts.push(`language:${language}`);
    }
    if (term) {
      parts.push(`"${term}" in:name`);
    }
    const sortValue = sort ? MAP_SORT.get(sort) : null;
    if (sortValue) {
      parts.push(`sort:${sortValue}`);
    }
    const typeValue = type ? MAP_TYPE.get(type) : null;
    if (typeValue) {
      parts.push(`sort:${typeValue}`);
    }
    parts.push(`user:${username}`);
    return parts.join(' ');
  }
}
