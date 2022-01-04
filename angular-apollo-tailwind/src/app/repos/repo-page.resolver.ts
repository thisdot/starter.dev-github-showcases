import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { parseTopics } from './parse-topics';
import {
  RepoDetailsData,
  RepoDetailsVars,
  REPO_PAGE_QUERY,
  RepoPageDetails,
} from '../gql';

@Injectable({
  providedIn: 'root',
})
export class RepoPageResolver implements Resolve<RepoPageDetails | boolean> {
  constructor(private apollo: Apollo) {}

  resolve(route: ActivatedRouteSnapshot): Observable<RepoPageDetails> {
    const [owner, name] = this.getUser(route.url);

    return this.apollo
      .query<RepoDetailsData, RepoDetailsVars>({
        query: REPO_PAGE_QUERY,
        variables: {
          owner: owner ?? undefined,
          name: name ?? undefined,
        },
      })
      .pipe(
        map((res) => ({
          ...res,
          name,
          owner,
          login: res.data.viewer.login,
          branch: res.data.repository.defaultBranchRef.name,
          path: '',
          repository: res.data.repository,
          homepageUrl: res.data.repository.homepageUrl,
          topics: parseTopics(res.data.repository.topics?.nodes),
        })),
      );
  }

  private getUser(segments: UrlSegment[]): string[] {
    return segments.map(({ path }: UrlSegment) => path);
  }
}
