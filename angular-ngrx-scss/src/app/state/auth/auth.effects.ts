import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, take, tap } from 'rxjs/operators';
import { loadUserToken, loadUserTokenFailure, loadUserTokenSuccess } from '.';
import { AuthService } from '../../auth/services/auth.service';
import { startSignIn } from './auth.actions';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startSignIn),
      tap(() => this.authService.signIn()),
      take(1),
    );
  });

  saveUserToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserToken),
      concatMap(() =>
        this.authService.saveUserToken().pipe(
          map((token) => loadUserTokenSuccess({ isAuthenticated: true })),
          catchError((error) => of(loadUserTokenFailure({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
