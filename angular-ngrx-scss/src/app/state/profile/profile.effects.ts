import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, combineLatest, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import {
  fetchProfile,
  fetchProfileFailure,
  fetchProfileSuccess,
} from './profile.actions';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchProfile),
      switchMap(({ username }) =>
        combineLatest([
          this.userService.getUserInfo(username),
          this.userService.getUserOrganizations(username),
          this.userService.getUserRepos(username),
        ]).pipe(
          map(([user, orgs, repos]) =>
            fetchProfileSuccess({ data: { user, orgs, repos } }),
          ),
          catchError((error) => {
            console.error(error);
            return of(fetchProfileFailure({ error }));
          }),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
