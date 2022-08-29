import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of, zip } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RepositoryService } from 'src/app/repository/services/repository.service';
import {
  fetchFileContents,
  fetchFileContentsFailure,
  fetchFileContentsSuccess,
  fetchPullRequests,
  fetchPullRequestsFailure,
  fetchPullRequestsSuccess,
  fetchRepository,
  fetchRepositoryFailure,
  fetchRepositorySuccess,
} from './repository.actions';
import { RepoState } from './repository.state';

@Injectable()
export class RepositoryEffects {
  fetchRepository$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchRepository),
      switchMap(({ owner, repoName, path, branch }) => {
        const repoInfo$ = this.repoService.getRepositoryInfo(owner, repoName);
        const repoPRCount$ = this.repoService.getPullRequestList(
          owner,
          repoName,
        );
        const repoContents$ = this.repoService.getRepositoryContents(
          owner,
          repoName,
          path,
        );
        const repoReadme$ = this.repoService.getReadmeContent(owner, repoName);

        return zip(repoInfo$, repoPRCount$, repoContents$, repoReadme$).pipe(
          map(([info, prCount, contents, readme]) => {
            const allData: RepoState = {
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
              activeBranch: branch ?? info.activeBranch,
              selectedFile: null,
              openPullRequests: null,
              closedPullRequests: null,
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

  fetchFileContents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchFileContents),
      switchMap(({ owner, repoName, path, commitOrBranchOrTagName }) => {
        return this.repoService
          .getFileContents(owner, repoName, path, commitOrBranchOrTagName)
          .pipe(
            map((fileContents) => fetchFileContentsSuccess({ fileContents })),
            catchError((error) => of(fetchFileContentsFailure({ error }))),
          );
      }),
    );
  });

  fetchPullRequests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchPullRequests),
      mergeMap(({ owner, repoName, prState }) => {
        return this.repoService.getPullRequests(owner, repoName, prState).pipe(
          map((pullRequests) =>
            fetchPullRequestsSuccess({ pullRequests, prState }),
          ),
          catchError((error) => of(fetchPullRequestsFailure({ error }))),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private repoService: RepositoryService,
  ) {}
}
