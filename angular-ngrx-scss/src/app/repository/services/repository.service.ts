import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  FileContentsApiResponse,
  IssueAPIResponse,
  IssueLabel,
  Milestone,
  PaginationParams,
  PullRequestAPIResponse,
  ReadmeApiResponse,
  RepoApiResponse,
  RepoContentsApiResponse,
  RepoIssues,
  RepoPullRequests,
} from 'src/app/state/repository';
import { environment } from 'src/environments/environment';
import {
  Issue,
  IssueComments,
  PullRequest,
  PullRequests,
  RepositoryIssuesApiParams,
} from './repository.interfaces';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  /**
   * Gets information on a single repository
   * @param repoOwner who the repo belongs to
   * @param repoName name of the repo
   * @returns the full GH response with information on the specified repository
   */
  getRepositoryInfo(
    repoOwner: string,
    repoName: string,
  ): Observable<RepoApiResponse> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const url = `${environment.githubUrl}/repos/${owner}/${name}`;

    return this.http.get<RepoApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  getRepositoryPullRequestsCount(
    repoOwner: string,
    repoName: string,
  ): Observable<number> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/pulls`;

    return this.http
      .get<PullRequests>(url, {
        observe: 'response',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        params: new HttpParams({
          fromObject: {
            state: 'open',
            per_page: 1,
          },
        }),
      })
      .pipe(
        map((response) =>
          this.extractTotalFromLinkHeader(response.headers.get('Link')),
        ),
      );
  }

  /**
   * Gets a list of all the pull requests for the specified repository
   * @param repoOwner who the repo belongs to
   * @param repoName name of the repo
   * @returns the full GH response with the list of associated pull requests
   */
  getRepositoryPullRequests(
    repoOwner: string,
    repoName: string,
    params: RepositoryIssuesApiParams,
  ): Observable<RepoPullRequests> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const state = encodeURIComponent(params.state);
    let url = `${environment.githubUrl}/search/issues?q=repo:${owner}/${name}+type:pr+state:${state}`;

    url = this.appendUrlParams(url, params);

    return this.http
      .get(url, {
        observe: 'response',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })
      .pipe(
        map((response) => {
          const data = response.body as PullRequestAPIResponse;

          const total = data.total_count;

          const page = params?.page ?? 1;

          const paginationParams = this.getPaginationParams(
            response.headers,
            page,
          );

          const pullRequests: PullRequest[] = data.items;

          return { pullRequests, paginationParams, total } as RepoPullRequests;
        }),
      );
  }

  /**
   * Gets a list of all the milestones for the specified repository
   * @param repoOwner who the repo belongs to
   * @param repoName name of the repo
   * @returns an array of milestones
   */
  getRepositoryMilestones(
    repoOwner: string,
    repoName: string,
  ): Observable<Milestone[]> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/milestones`;

    return this.http.get<Milestone[]>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets a list of all the milestones for the specified repository
   * @param repoOwner who the repo belongs to
   * @param repoName name of the repo
   * @returns an array of milestones
   */
  getRepositoryLabels(
    repoOwner: string,
    repoName: string,
  ): Observable<IssueLabel[]> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/labels`;

    return this.http.get<IssueLabel[]>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets pull request information for a single pull request
   * @param repoOwner who the repo belongs to
   * @param repoName name of the repo
   * @param pullNumber the pull request identifier
   * @returns the full GH response with info on the specified pull request
   */
  getRepositoryPullRequest(
    repoOwner: string,
    repoName: string,
    pullNumber: number,
  ): Observable<PullRequest> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const pullId = encodeURIComponent(pullNumber);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/pulls/${pullId}`;

    return this.http.get<PullRequest>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets comments on a specified pull request
   * @param owner who it belongs to
   * @param repoName name of repo
   * @param pullNumber pull request identifier
   * @returns the full GH response of comments on specified pull request
   */
  getRepositoryPullRequestComments(
    repoOwner: string,
    repoName: string,
    pullNumber: number,
  ): Observable<IssueComments> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const pullId = encodeURIComponent(pullNumber);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/issues/${pullId}/comments`;

    return this.http.get<IssueComments>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Get a list of issues for the specified repository
   * @param owner who the repo belongs to
   * @param repoName name of repo
   * @param params any filter or sort parameters
   * @returns the full GH response of the issues associated with the specified repository
   */
  getRepositoryIssues(
    repoOwner: string,
    repoName: string,
    params?: RepositoryIssuesApiParams,
  ): Observable<RepoIssues> {
    const defaultParams = {
      state: 'all',
      sort: 'created',
      direction: 'desc',
      per_page: 30,
      page: 1,
      pulls: false,
    };

    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const state = encodeURIComponent(params?.state ?? defaultParams.state);
    let url = `${environment.githubUrl}/search/issues?q=repo:${owner}/${name}+type:issue+state:${state}`;

    url = this.appendUrlParams(url, params);

    return this.http
      .get(url, {
        observe: 'response',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })
      .pipe(
        map((response) => {
          const data = response.body as IssueAPIResponse;

          const total = data.total_count;

          const page = params?.page || 1;

          const paginationParams = this.getPaginationParams(
            response.headers,
            page,
          );

          const issues: Issue[] = data.items;

          return { issues, paginationParams, total } as RepoIssues;
        }),
      );
  }

  /**
   * Gets the contents of a directory for the specified repository
   * @param owner who the repo belongs to
   * @param repoName name of the repo
   * @param path (optional) if provided, the path to retrieve; defaults to the root directory
   * @param commitOrBranchOrTagName (optional) if provided, the specific commit / branch / tag to retrieve; defaults to the main branch
   * @returns the full GH response containing the repository contents
   */
  getRepositoryContents(
    repoOwner: string,
    repoName: string,
    pathName?: string,
    commitOrBranchOrTagName?: string,
  ): Observable<RepoContentsApiResponse[]> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const path = pathName && encodeURIComponent(pathName);
    const refPath =
      commitOrBranchOrTagName && encodeURIComponent(commitOrBranchOrTagName);
    let url = `${environment.githubUrl}/repos/${owner}/${name}/contents`;
    if (path) {
      url += `/${path}`;
    }
    if (refPath) {
      url += `?ref=${refPath}`;
    }

    return this.http.get<RepoContentsApiResponse[]>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets the contents of a file for the specified repository
   * @param owner who the repo belongs to
   * @param repoName name of the repo
   * @param path the path to retrieve
   * @param commitOrBranchOrTagName (optional) if provided, the specific commit / branch / tag to retrieve; defaults to the main branch
   * @returns the full GH response containing the repository contents
   */
  getFileContents(
    repoOwner: string,
    repoName: string,
    pathName: string,
    commitOrBranchOrTagName?: string,
  ): Observable<FileContentsApiResponse> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const path = encodeURIComponent(pathName);
    const refPath =
      commitOrBranchOrTagName && encodeURIComponent(commitOrBranchOrTagName);
    let url = `${environment.githubUrl}/repos/${owner}/${name}/contents/${path}`;
    if (refPath) {
      url += `?ref=${refPath}`;
    }

    return this.http.get<FileContentsApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets the contents of the repository's readme file
   * @param owner who the repo belongs to
   * @param repoName name of the repo
   * @returns the readme file for the repository
   */
  getRepositoryReadme(
    repoOwner: string,
    repoName: string,
  ): Observable<ReadmeApiResponse> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/readme`;

    return this.http.get<ReadmeApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  private extractTotalFromLinkHeader(linkHeader: string | null): number {
    if (!linkHeader) {
      return 0;
    }

    // Split the linkHeader by commas to separate individual links
    const links = linkHeader.split(',');

    // Find the last link in the header
    const lastLink = links
      .find((link) => link.includes('rel="last"'))
      ?.split(';')[0]
      ?.trim()
      .slice(1, -1);

    if (!lastLink) {
      return 0;
    }

    const url = new URL(lastLink);

    const queryParams = new URLSearchParams(url.search);
    const page = parseInt(queryParams.get('page') ?? '', 10);

    if (isNaN(page)) {
      return 0;
    }

    return page;
  }

  private appendUrlParams(
    url: string,
    params?: RepositoryIssuesApiParams,
  ): string {
    if (params?.labels) {
      url += `+label:"${params.labels}"`;
    }

    if (params?.milestone) {
      url += `+milestone:"${params.milestone}"`;
    }

    if (params?.sort) {
      url += `+sort:${params.sort}`;
    }

    if (params?.page) {
      url += `&page=${params.page}`;
    }
    return url;
  }

  private getPaginationParams(
    headers: HttpHeaders,
    page: number,
  ): PaginationParams {
    const linkHeader = headers.get('Link');

    const canNext = !!(linkHeader && linkHeader.includes('rel="next"'));
    const canPrev = !!(linkHeader && linkHeader.includes('rel="prev"'));

    return {
      canNext,
      canPrev,
      page,
    };
  }
}
