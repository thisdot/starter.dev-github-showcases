import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  fetchRepository,
  fetchRepositorySuccess,
  fetchRepositoryFailure,
} from './repository.actions';
import { RepositoryService } from 'src/app/repository/services/repository.service';
@Injectable()
export class RepositoryEffects {
  fetchRepository$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchRepository),
      switchMap(({ owner, repoName }) =>
        this.repoService.getRepositoryInfo(owner, repoName).pipe(
          map((data) => fetchRepositorySuccess({ repoData: data })),
          catchError((error) => of(fetchRepositoryFailure({ error }))),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private repoService: RepositoryService,
  ) {}
}
