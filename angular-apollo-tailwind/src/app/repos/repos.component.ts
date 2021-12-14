import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import {
  CurrentUserData,
  CurrentUserRepos,
  CurrentUserReposData,
  CurrentUserReposVars,
  CURRENT_USER_QUERY,
  CURRENT_USER_REPOS_QUERY,
} from '../gql';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
})
export class ReposComponent {
  userName$: Observable<any> = this.apollo
    .watchQuery<CurrentUserData>({ query: CURRENT_USER_QUERY })
    .valueChanges.pipe(
      map((res) => ({
        ...res,
        name: res.data.viewer.name,
        login: res.data.viewer.login,
      })),
    );

  repos$: Observable<CurrentUserRepos[]> = this.apollo
    .watchQuery<CurrentUserReposData, CurrentUserReposVars>({
      query: CURRENT_USER_REPOS_QUERY,
    })
    .valueChanges.pipe(map((res) => res.data.viewer.repositories.nodes));

  constructor(private apollo: Apollo) {}
}
