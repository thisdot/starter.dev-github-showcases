import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  UrlSegment,
} from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import {
  RepoDetailsData,
  RepoDetailsVars,
  REPO_DETAILS_QUERY,
  ResolvedRepoDetails,
} from '../gql';

@Injectable({
  providedIn: 'root',
})
export class RepoDataResolver
  implements Resolve<ResolvedRepoDetails | boolean>
{
  constructor(private apollo: Apollo) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const [owner, name] = this.getUser(route.url);

    return this.apollo
      .query<RepoDetailsData, RepoDetailsVars>({
        query: REPO_DETAILS_QUERY,
        variables: this.setVariables(owner, name),
      })
      .pipe(
        map(
          (res) =>
            ({
              name,
              owner,
              error: res.error ?? res.errors,
              loading: res.loading,
              repository: res.data.resository,
            } as ResolvedRepoDetails)
        )
      );
  }

  getUser(segments: UrlSegment[]): string[] {
    return segments.map(({ path }: UrlSegment) => path);
  }

  isOwnerAndNameValid(owner: string, name: string): boolean {
    return typeof owner === 'string' && typeof name === 'string';
  }

  setVariables(owner: string, name: string): RepoDetailsVars {
    return this.isOwnerAndNameValid(owner, name)
      ? {
          owner,
          name,
        }
      : {
          owner: '',
          name: '',
        };
  }
}
