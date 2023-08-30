import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of, zip } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RepositoryService } from 'src/app/repository/services/repository.service';
import {
  fetchFileContents,
  fetchFileContentsFailure,
  fetchFileContentsSuccess,
  fetchIssues,
  fetchIssuesFailure,
  fetchIssuesSuccess,
  fetchPullRequests,
  fetchPullRequestsFailure,
  fetchPullRequestsSuccess,
  fetchRepository,
  fetchRepositoryFailure,
  fetchRepositorySuccess,
} from './repository.actions';
import { FileContents } from './repository.state';
import { reposApiToRepoStateMapping } from './repository.mappings';

@Injectable()
export class RepositoryEffects {
  fetchRepository$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchRepository),
      switchMap(({ owner, repoName, path, branch }) => {
        const repoInfo$ = this.repoService.getRepositoryInfo(owner, repoName);

        const repoPRCount$ = this.repoService.getRepositoryPullRequestsCount(
          owner,
          repoName,
        );

        const repoContents$ = this.repoService.getRepositoryContents(
          owner,
          repoName,
          path,
        );

        const repoReadme$ = this.repoService.getRepositoryReadme(
          owner,
          repoName,
          path,
        );

        const repoMilestones$ = this.repoService.getRepositoryMilestones(
          owner,
          repoName,
        );

        const repoLabels$ = this.repoService.getRepositoryLabels(
          owner,
          repoName,
        );

        return zip(
          repoInfo$,
          repoPRCount$,
          repoContents$,
          repoReadme$,
          repoMilestones$,
          repoLabels$,
        ).pipe(
          map(([info, prCount, contents, readme, milestones, labels]) => {
            const repoData = reposApiToRepoStateMapping(
              info,
              prCount,
              contents,
              readme,
              milestones,
              labels,
              owner,
              path,
              branch,
            );
            return fetchRepositorySuccess({ repoData });
          }),
          catchError((error) => of(fetchRepositoryFailure({ error }))),
        );
      }),
    );
  });

  fetchFileContents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchFileContents),
      switchMap(({ owner, repoName, path, commitOrBranchOrTagName }) => {
        return this.repoService
          .getFileContents(owner, repoName, path, commitOrBranchOrTagName)
          .pipe(
            map((contents) => {
              const fileContents: FileContents = {
                name: contents.name,
                type: contents.type,
                content: atob(contents.content),
                size: contents.size,
              };
              return fetchFileContentsSuccess({ fileContents });
            }),
            catchError((error) => of(fetchFileContentsFailure({ error }))),
          );
      }),
    );
  });

  fetchPullRequests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchPullRequests),
      mergeMap(({ owner, repoName, params }) => {
        return this.repoService
          .getRepositoryPullRequests(owner, repoName, params)
          .pipe(
            map((pullRequests) => {
              return fetchPullRequestsSuccess({ pullRequests, params });
            }),
            catchError((error) => of(fetchPullRequestsFailure({ error }))),
          );
      }),
    );
  });

  fetchIssues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchIssues),
      mergeMap(({ owner, repoName, params }) => {
        return this.repoService
          .getRepositoryIssues(owner, repoName, params)
          .pipe(
            map((issues) => {
              return fetchIssuesSuccess({ issues, params });
            }),
            catchError((error) => of(fetchIssuesFailure({ error }))),
          );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private repoService: RepositoryService,
  ) {}
}
