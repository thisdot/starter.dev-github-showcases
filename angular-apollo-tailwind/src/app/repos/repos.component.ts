import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import {
  CurrentUser,
  CurrentUserData,
  UserTopRepo,
  UserTopReposData,
  UserTopReposVars,
  CURRENT_USER_QUERY,
  USER_TOP_REPOS_QUERY,
  TopRepoDetials,
} from '../gql';
import { parseQuery } from './parse-top-repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
})
export class ReposComponent {
  userName$: Observable<CurrentUser> = this.apollo
    .watchQuery<CurrentUserData>({ query: CURRENT_USER_QUERY })
    .valueChanges.pipe(
      map((res) => ({
        name: res.data.viewer.name,
        login: res.data.viewer.login,
      })),
    );

  repoDetails$: Observable<TopRepoDetials> = this.apollo
    .watchQuery<UserTopReposData, UserTopReposVars>({
      query: USER_TOP_REPOS_QUERY,
    })
    .valueChanges.pipe(
      map((res) => ({
        ...res,
        repos: parseQuery(res.data),
      })),
    );

  constructor(private apollo: Apollo) {}
}
