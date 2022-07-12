import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, UrlSegment } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RepoPage, RepoPageGQL } from '../gql';
import { parseTopics } from './parse-topics';

@Injectable({
  providedIn: 'root',
})
export class RepoPageResolver implements Resolve<RepoPage | boolean> {
  constructor(private repoPageGQL: RepoPageGQL) {}

  resolve(route: ActivatedRouteSnapshot): Observable<RepoPage> {
    const [owner, name] = this.getUser(route.url);

    return this.repoPageGQL
      .fetch({
        owner: owner ?? undefined,
        name: name ?? undefined,
      })
      .pipe(
        map((res) => ({
          name,
          owner,
          login: res.data?.viewer?.login,
          branch: res.data?.repository?.defaultBranchRef?.name ?? 'HEAD',
          path: '',
          repository: {
            isPrivate: res.data.repository?.isPrivate,
            description: res.data.repository?.description,
            stargazerCount: res.data.repository?.stargazerCount,
            forkCount: res.data.repository?.forkCount,
            watcherCount: res.data.repository?.watchers.totalCount,
            openIssueCount: res.data.repository?.openIssues.totalCount,
            openPullRequestCount:
              res.data.repository?.openPullRequests.totalCount,
            homepageUrl: res.data?.repository?.homepageUrl,
            topics: parseTopics(res.data?.repository?.topics?.nodes),
          },
        })),
      );
  }

  private getUser(segments: UrlSegment[]): string[] {
    return segments.map(({ path }: UrlSegment) => path);
  }
}
