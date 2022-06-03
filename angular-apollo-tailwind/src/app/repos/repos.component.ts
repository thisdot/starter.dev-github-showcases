import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  CurrentUserGQL,
  CurrentUserQuery,
  TopRepo,
  UserTopReposGQL,
} from '../gql';
import { parseTopRepos } from './parse-top-repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
})
export class ReposComponent {
  user$: Observable<CurrentUserQuery['viewer']> = this.currentUserGQL
    .watch()
    .valueChanges.pipe(map((res) => res.data.viewer));

  repoDetails$: Observable<{ repos: TopRepo[] }> = this.userTopReposGQL
    .watch()
    .valueChanges.pipe(
      map((res) => ({
        repos: parseTopRepos(res.data),
      })),
    );

  constructor(
    private currentUserGQL: CurrentUserGQL,
    private userTopReposGQL: UserTopReposGQL,
  ) {}
}
