import { Component } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap, map } from 'rxjs';
import {
  ORDER_BY_DIRECTION,
  ORDER_BY_FIELD,
  UserRepoDetails,
  UserReposData,
  UserReposVars,
  USER_REPOS_QUERY,
} from 'src/app/gql';
import { parseQuery } from './parse-profile-repos';

@Component({
  selector: 'app-profile-repos-list',
  templateUrl: './profile-repos-list.component.html',
  styleUrls: ['./profile-repos-list.component.css'],
})
export class ProfileReposListComponent {
  profileRepos$: Observable<UserRepoDetails> = this.routeConfigService
    .getLeafConfig<string>('username')
    .pipe(
      switchMap((owner: string) =>
        this.apollo
          .watchQuery<UserReposData, UserReposVars>({
            query: USER_REPOS_QUERY,
            variables: {
              username: owner,
              // TODO: have the following controlled by filter state
              orderBy: {
                field: ORDER_BY_FIELD.CreatedAt,
                direction: ORDER_BY_DIRECTION.Desc,
              },
              afterCursor: undefined,
              beforeCursor: undefined,
            },
          })
          .valueChanges.pipe(
            map((res) => ({
              ...res,
              owner,
              ...parseQuery(res.data),
            })),
          ),
      ),
    );

  constructor(
    private routeConfigService: RouteConfigService<string, 'username'>,
    private apollo: Apollo,
  ) {}
}
