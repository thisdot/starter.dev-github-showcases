import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import { AuthUserData } from './auth.state';
import { AuthService } from '../../auth/services/auth.service';
import {
  saveUserToken,
  saveUserTokenFailure,
  saveUserTokenSuccess,
  removeUserToken,
  signOutUser,
  signInUser,
  fetchAuthenticatedUserDataSuccess,
  fetchAuthenticatedUserDataFailure,
  userTokenExists,
  authUserSaved,
} from './auth.actions';
import { selectAuthUserName } from './auth.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  /**
   * Start the OAuth sign in process for the user - does not dispatch
   * since it does not need to return a new action
   */
  signIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInUser),
        tap(() => this.authService.signIn()),
      ),
    { dispatch: false },
  );

  /**
   *   Start the sign out process for the user
   */
  signOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signOutUser),
      tap(() => this.authService.signOut()),
      tap(() => this.router.navigate(['/signin'])),
      switchMap(() => of(removeUserToken({ isAuthenticated: false }))),
    );
  });

  /**
   * Saves the resulting access_token for the user
   */
  saveUserToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveUserToken),
      concatMap(() =>
        this.authService.saveUserToken().pipe(
          map(() => saveUserTokenSuccess({ isAuthenticated: true })),
          catchError((error) => of(saveUserTokenFailure({ error }))),
        ),
      ),
    );
  });

  fetchAuthUserData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveUserTokenSuccess, userTokenExists),
      concatLatestFrom(() => this.store.select(selectAuthUserName)),
      switchMap(([_, username]) => {
        if (username) {
          return of(authUserSaved());
        }
        return this.userService.getAuthenticatedUserInfo().pipe(
          map((userData) => {
            const user: AuthUserData = {
              avatar: userData.avatar_url,
              email: userData.email,
              username: userData.login,
            };
            return fetchAuthenticatedUserDataSuccess({ userData: user });
          }),
          catchError((error) =>
            of(fetchAuthenticatedUserDataFailure({ error })),
          ),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) {}
}
