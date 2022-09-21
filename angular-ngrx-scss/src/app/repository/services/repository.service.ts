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

  getRepositoryInfo(owner: string, repoName: string): Observable<RepoState> {
    const url = `${environment.githubUrl}/repos/${owner}/${repoName}`;

    return this.http.get<RepoApiResponse>(url).pipe(
      map((data) => ({
        repoName: data.name,
        description: data.description,
        website: data.homepage,
        visibility: data.visibility,
        watchCount: data.watchers_count,
        starCount: data.stargazers_count,
        forkCount: data.forks_count,
        issueCount: data.open_issues_count,
        tags: data.topics,
        selectedFile: null,
        openPullRequests: null,
        closedPullRequests: null,
        activeBranch: data.default_branch,
        ownerName: '',
        prCount: 0,
        readme: '',
        tree: [],
      })),
    );
  }

  // TODO: set this method up to return the data as well as the count (issue #185)
  // TODO: write test for this function when it's updated
  getPullRequestList(owner: string, repoName: string): Observable<number> {
    const url = `${environment.githubUrl}/repos/${owner}/${repoName}/pulls`;

    return this.http.get<[]>(url).pipe(map((data) => data.length));
  }

  getRepositoryPullRequest(
    owner: string,
    repoName: string,
    pullNumber: number,
  ): Observable<PullRequest> {
    const url = `${environment.githubUrl}/repos/${encodeURIComponent(
      owner,
    )}/${encodeURIComponent(repoName)}/pulls/${encodeURIComponent(pullNumber)}`;

    return this.http.get<PullRequest>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  getRepositoryPullRequests(
    owner: string,
    repoName: string,
  ): Observable<PullRequests> {
    const url = `${environment.githubUrl}/repos/${encodeURIComponent(
      owner,
    )}/${encodeURIComponent(repoName)}/pulls`;

    return this.http.get<PullRequests>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  getRepositoryPullRequestComments(
    owner: string,
    repoName: string,
    pullNumber: number,
  ): Observable<IssueComments> {
    const url = `${environment.githubUrl}/repos/${encodeURIComponent(
      owner,
    )}/${encodeURIComponent(repoName)}/issues/${encodeURIComponent(
      pullNumber,
    )}/comments`;

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

  getRepositoryIssues(
    owner: string,
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

    const url = `${environment.githubUrl}/repos/${encodeURIComponent(
      owner,
    )}/${encodeURIComponent(repoName)}/issues`;

    return this.http.get<Issues>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      params: new HttpParams({
        fromObject: { ...Object.assign(defaultParams, params) },
      }),
    });
  }
}
