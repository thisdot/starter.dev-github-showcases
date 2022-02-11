import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  fetchUserData,
  fetchUserDataError,
  fetchUserDataSuccess,
} from './user.actions';
import { UserService } from 'src/app/user/services/user.service';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserData),
      switchMap(() =>
        this.userService.getUserInfo().pipe(
          map((data) => fetchUserDataSuccess({ userData: data })),
          catchError((error) => of(fetchUserDataError({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
