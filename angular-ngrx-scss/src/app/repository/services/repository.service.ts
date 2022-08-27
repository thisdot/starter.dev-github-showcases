import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  FileContents,
  FileContentsApiResponse,
  PR_STATE,
  PullRequestAPIResponse,
  ReadmeApiResponse,
  RepoApiResponse,
  RepoContents,
  RepoContentsApiResponse,
  RepoPullRequests,
  RepoState,
} from 'src/app/state/repository';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  FileContentsApiResponse,
  ReadmeApiResponse,
  RepoApiResponse,
  RepoContentsApiResponse,
} from 'src/app/state/repository';
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

  getRepositoryContents(
    owner: string,
    repoName: string,
    path?: string,
  ): Observable<RepoContents[]> {
    const url = path
      ? `${environment.githubUrl}/repos/${owner}/${repoName}/contents/${path}`
      : `${environment.githubUrl}/repos/${owner}/${repoName}/contents`;

    return this.http.get<RepoContentsApiResponse[]>(url).pipe(
      map((data) => {
        return data.map((value) => ({
          name: value.name,
          type: value.type,
          path: value.path,
        }));
      }),
    );
  }

  getFileContents(
    owner: string,
    repoName: string,
    path: string,
    commitOrBranchOrTagName: string,
  ): Observable<FileContents> {
    const url = `${environment.githubUrl}/repos/${owner}/${repoName}/contents/${path}?ref=${commitOrBranchOrTagName}`;
    return this.http.get<FileContentsApiResponse>(url).pipe(
      map((data) => {
        return {
          name: data.name,
          type: data.type,
          // TODO: consider using a function that also takes encoding format to decode this
          content: atob(data.content),
          size: data.size,
        };
      }),
    );
  }

  getPullRequests(
    owner: string,
    repoName: string,
    prState: PR_STATE,
  ): Observable<RepoPullRequests> {
    const url = `${environment.githubUrl}/search/issues?q=repo:${owner}/${repoName}+type:pr+state:${prState}`;
    return this.http.get<PullRequestAPIResponse>(url).pipe(
      map((data) => {
        return {
          totalCount: data.total_count,
          pullRequests: data.items.map((item) => ({
            id: item.id,
            login: item.user.login,
            title: item.title,
            number: item.number,
            state: item.state,
            closedAt: item.closed_at ? new Date(item.closed_at) : null,
            mergedAt: item.pull_request.merged_at
              ? new Date(item.pull_request.merged_at)
              : null,
            createdAt: new Date(item.created_at),
            labels: item.labels,
            commentCount: item.comments,
            labelCount: item.labels.length,
          })),
        };
      }),
    );
  }

  // TODO: readme file is currently an encoded string - this method should be improved to either return the raw data, or include the fields needed to de-code the string when ready to display it
  // TODO: write test for this function when it's updated
  getReadmeContent(owner: string, repoName: string): Observable<string> {
    const url = `${environment.githubUrl}/repos/${owner}/${repoName}/readme`;

    return this.http
      .get<ReadmeApiResponse>(url)
      .pipe(map((file) => file.content));
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
