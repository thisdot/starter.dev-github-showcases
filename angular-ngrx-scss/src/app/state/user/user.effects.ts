import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import {
  fetchUserData,
  fetchUserDataError,
  fetchUserDataSuccess,
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

  constructor(public actions$: Actions, private userService: UserService) {}
}
