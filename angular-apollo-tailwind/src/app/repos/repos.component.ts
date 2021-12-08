import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
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
export class ReposComponent implements OnInit {
  userName$: Observable<string | null> = of(null);
  repos$: Observable<CurrentUserRepos[] | null> = of(null);

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.userName$ = this.apollo
      .watchQuery<CurrentUserData>({ query: CURRENT_USER_QUERY })
      .valueChanges.pipe(map((res) => res.data.viewer.name));

    this.repos$ = this.apollo
      .watchQuery<CurrentUserReposData, CurrentUserReposVars>({
        query: CURRENT_USER_REPOS_QUERY,
      })
      .valueChanges.pipe(map((res) => res.data.viewer.repositories.nodes));
  }
}
