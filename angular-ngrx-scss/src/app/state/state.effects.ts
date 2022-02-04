import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as StateActions from './state.actions';



@Injectable()
export class StateEffects {

  loadStates$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(StateActions.loadStates),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StateActions.loadStatesSuccess({ data })),
          catchError(error => of(StateActions.loadStatesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
