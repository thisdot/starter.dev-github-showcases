import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as RepositoryActions from './repository.actions';



@Injectable()
export class RepositoryEffects {

  fetchRepositorys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(RepositoryActions.fetchRepositorys),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => RepositoryActions.fetchRepositorysSuccess({ data })),
          catchError(error => of(RepositoryActions.fetchRepositorysFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
