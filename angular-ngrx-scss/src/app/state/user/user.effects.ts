import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from './user.actions';
import { UserService } from 'src/app/user/services/user.service';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.fetchUserData),
      concatMap(() =>
        this.userService.getUserInfo().pipe(
          map((data) => UserActions.fetchUserDataSuccess({ userData: data })),
          catchError((error) => of(UserActions.fetchUserDataError({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
