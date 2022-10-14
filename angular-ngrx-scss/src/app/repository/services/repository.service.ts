import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FileContentsApiResponse,
  PR_STATE,
  PullRequestAPIResponse,
  ReadmeApiResponse,
  RepoApiResponse,
  RepoContentsApiResponse,
} from 'src/app/state/repository';
import { environment } from 'src/environments/environment';
import {
  IssueComments,
  Issues,
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

  /**
   * Gets a list of all the pull requests for the specified repository
   * @param repoOwner who the repo belongs to
   * @param repoName name of the repo
   * @returns the full GH response with the list of associated pull requests
   */
  getRepositoryPullRequests(
    repoOwner: string,
    repoName: string,
  ): Observable<PullRequests> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/pulls`;

    return this.http.get<PullRequests>(url, {
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
   * NOTE: This call uses the search URL to find the information, and is a bit of a duplicate of other calls that use the repo URL. Both work fine and are provided currently.
   * Gets a list of pull requests matching the provided state
   * @param repoOwner who the repo belongs to
   * @param repoName name of the repo
   * @param prState if the pr is open or closed
   * @returns the total count of state-matching pull requests and information for each of those pulls
   */
  getPullRequests(
    repoOwner: string,
    repoName: string,
    prState: PR_STATE,
  ): Observable<PullRequestAPIResponse> {
    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const state = encodeURIComponent(prState);
    const url = `${environment.githubUrl}/search/issues?q=repo:${owner}/${name}+type:pr+state:${state}`;

    return this.http.get<PullRequestAPIResponse>(url, {
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
  ): Observable<Issues> {
    const defaultParams = {
      state: 'all',
      sort: 'created',
      direction: 'desc',
      per_page: 30,
      page: 1,
    };

    const owner = encodeURIComponent(repoOwner);
    const name = encodeURIComponent(repoName);
    const url = `${environment.githubUrl}/repos/${owner}/${name}/issues`;

    return this.http.get<Issues>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      params: new HttpParams({
        fromObject: { ...Object.assign(defaultParams, params) },
      }),
    });
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
}
