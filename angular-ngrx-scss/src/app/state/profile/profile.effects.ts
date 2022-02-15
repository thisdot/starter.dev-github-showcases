import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
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
        this.userService.getUserInfo(username).pipe(
          map((data) => fetchProfileSuccess({ data: { user: data } })),
          catchError((error) => of(fetchProfileFailure({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
