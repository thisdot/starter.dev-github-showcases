import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import { startSignIn, signInSuccess, signInFailure } from './auth.actions';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startSignIn),
      tap(() => this.authService.signIn()),
      take(1),
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
