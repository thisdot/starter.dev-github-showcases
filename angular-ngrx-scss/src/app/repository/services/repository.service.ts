import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ReadmeApiResponse,
  RepoApiResponse,
  RepoContents,
  RepoContentsApiResponse,
  RepoState,
} from 'src/app/state/repository';
import { environment } from 'src/environments/environment';
import {
  Issues,
  PullRequest,
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
        const files = data.map((value) => ({
          name: value.name,
          type: value.type,
        }));

        return files;
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
