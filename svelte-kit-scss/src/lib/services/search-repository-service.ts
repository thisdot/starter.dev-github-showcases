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

type RepositorySearchQueryParameters = {
  language?: string;
  sort?: RepositorySearchSort;
  term?: string;
  type?: RepositorySearchType;
};

export class RepositorySearchService extends AbstractFetchService {
  constructor(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
  ) {
    super(fetch);
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
