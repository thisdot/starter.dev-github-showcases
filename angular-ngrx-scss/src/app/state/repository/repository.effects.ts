import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, zip } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { RepositoryService } from 'src/app/repository/services/repository.service';
import { selectUserLoginName } from '../user';
import {
  fetchRepository,
  fetchRepositoryFailure,
  fetchRepositorySuccess,
} from './repository.actions';
@Injectable()
export class RepositoryEffects {
  fetchRepository$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchRepository),
      switchMap(({ owner, repoName }) => {
        const repoInfo$ = this.repoService.getRepositoryInfo(owner, repoName);
        const repoPRCount$ = this.repoService.getPullRequestList(
          owner,
          repoName,
        );
        const repoContents$ = this.repoService.getRepositoryContents(
          owner,
          repoName,
        );
        const repoReadme$ = this.repoService.getReadmeContent(owner, repoName);

        return zip(repoInfo$, repoPRCount$, repoContents$, repoReadme$).pipe(
          map(([info, prCount, contents, readme]) => {
            const allData = {
              description: info.description,
              forkCount: info.forkCount,
              issueCount: info.issueCount,
              ownerName: owner,
              prCount: prCount,
              readme: readme,
              repoName: info.repoName,
              starCount: info.starCount,
              tags: info.tags,
              tree: contents,
              visibility: info.visibility,
              watchCount: info.watchCount,
              website: info.website,
            };
            return fetchRepositorySuccess({ repoData: allData });
          }),
          catchError((error) => of(fetchRepositoryFailure({ error }))),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private repoService: RepositoryService,
    private store: Store,
  ) {}
}
