import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import { UserGistsState } from '../profile';
import {
  fetchUserData,
  fetchUserDataError,
  fetchUserDataSuccess,
  fetchUserGistsError,
  fetchUserGistsSuccess,
  fetchUserTopReposError,
  fetchUserTopReposSuccess,
} from './user.actions';
import {
  userApiToUserStateMapping,
  userReposApiToUserRepoStateMapping,
} from './user.mappings';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserData),
      switchMap(({ username }) =>
        this.userService.getUserInfo(username).pipe(
          map((userData) => {
            const user = userApiToUserStateMapping(userData);
            return fetchUserDataSuccess({ userData: user });
          }),
          catchError((error) => of(fetchUserDataError({ error }))),
        ),
      ),
    );
  });

  loadUserGists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserDataSuccess),
      switchMap(({ userData: { username } }) =>
        this.userService.getUserGists(username).pipe(
          map((data) => {
            const gists: UserGistsState[] = data.map((gist) => ({
              url: gist.html_url,
              fileName: Object.keys(gist.files)[0],
            }));
            return fetchUserGistsSuccess({ gists });
          }),
          catchError((error) => of(fetchUserGistsError({ error }))),
        ),
      ),
    );
  });

  loadUserTopRepos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserDataSuccess),
      switchMap(({ userData: { username } }) =>
        this.userService.getUserTopRepos(username).pipe(
          map((data) => {
            const topRepos = userReposApiToUserRepoStateMapping(data);
            return fetchUserTopReposSuccess({ topRepos });
          }),
          catchError((error) => of(fetchUserTopReposError({ error }))),
        ),
      ),
    );
  });

  constructor(public actions$: Actions, private userService: UserService) {}
}
