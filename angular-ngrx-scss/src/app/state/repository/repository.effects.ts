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
import {
  FileContents,
  RepoContents,
  RepositoryState,
} from './repository.state';

@Injectable()
export class RepositoryEffects {
  fetchRepository$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchRepository),
      switchMap(({ owner, repoName, path, branch }) => {
        const repoInfo$ = this.repoService.getRepositoryInfo(owner, repoName);
        const repoPRList$ = this.repoService.getRepositoryPullRequests(
          owner,
          repoName,
        );
        const repoContents$ = this.repoService.getRepositoryContents(
          owner,
          repoName,
          path,
        );

        return zip(repoInfo$, repoPRCount$, repoContents$, repoReadme$).pipe(
          map(([info, prCount, contents, readme]) => {
            const allData: RepoState = {
        const repoReadme$ = this.repoService.getRepositoryReadme(
          owner,
          repoName,
        );

        return zip(repoInfo$, repoPRList$, repoContents$, repoReadme$).pipe(
          map(([info, prList, contents, readme]) => {
            const allData: RepositoryState = {
              description: info.description,
              forkCount: info.forks_count,
              issueCount: info.open_issues_count,
              ownerName: owner,
              prCount: prList.length,
              repoName: info.name,
              starCount: info.stargazers_count,
              tags: info.topics,
              tree: contents,
              activeBranch: branch ?? info.default_branch,
              selectedFile: null,
              openPullRequests: null,
              closedPullRequests: null,
              visibility: info.visibility,
              watchCount: info.watchers_count,
              website: info.homepage,
              readme: readme.content || '',
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
