import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { loadUserToken, loadUserTokenFailure, loadUserTokenSuccess } from '.';
import { AuthService } from '../../auth/services/auth.service';
import { startSignIn } from './auth.actions';

@Injectable()
export class AuthEffects {
  /**
   * Start the OAuth sign in process for the user - does not dispatch
   * since it does not need to return a new action
   */
  signIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startSignIn),
        tap(() => this.authService.signIn()),
      ),
    { dispatch: false },
  );

  /**
   * Saves the resulting access_token for the user
   */
  saveUserToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserToken),
      concatMap(() =>
        this.authService.saveUserToken().pipe(
          map(() => loadUserTokenSuccess({ isAuthenticated: true })),
          catchError((error) => of(loadUserTokenFailure({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
