import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import {
  fetchUserData,
  fetchUserDataError,
  fetchUserDataSuccess,
  fetchUserGistsError,
  fetchUserGistsSuccess,
  fetchUserTopReposError,
  fetchUserTopReposSuccess,
} from './user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserData),
      switchMap(() =>
        this.userService.getAuthenticatedUserInfo().pipe(
          map((data) => fetchUserDataSuccess({ userData: data })),
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
          map((data) => fetchUserGistsSuccess({ gists: data })),
          catchError((error) => of(fetchUserGistsError({ error }))),
        ),
      ),
    );
  });

  loadUserTopRepos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserDataSuccess),
      switchMap(() =>
        this.userService.getUserTopRepos().pipe(
          map((data) => fetchUserTopReposSuccess({ topRepos: data })),
          catchError((error) => of(fetchUserTopReposError({ error }))),
        ),
      ),
    );
  });

  constructor(public actions$: Actions, private userService: UserService) {}
}
