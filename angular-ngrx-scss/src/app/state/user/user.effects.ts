import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  map,
  skipWhile,
  switchMap,
  mergeMap,
} from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import { selectAuthUserName } from '../auth';
import { UserGistsState, UserReposState } from '../profile';
import {
  fetchUserData,
  fetchUserDataError,
  fetchUserDataSuccess,
  fetchUserGistsError,
  fetchUserGistsSuccess,
  fetchUserTopReposError,
  fetchUserTopReposSuccess,
} from './user.actions';
import { UserState } from './user.state';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserData),
      switchMap(({ username }) =>
        this.store.select(selectAuthUserName).pipe(
          skipWhile((name) => name === ''),
          mergeMap(() =>
            this.userService.getUserInfo(username).pipe(
              map((userData) => {
                const user: UserState = {
                  avatar: userData.avatar_url,
                  bio: userData.bio,
                  blog: userData.blog,
                  company: userData.company,
                  email: userData.email,
                  followers: userData.followers,
                  following: userData.following,
                  location: userData.location,
                  name: userData.name,
                  twitter_username: userData.twitter_username,
                  username: userData.login,
                  type: userData.type,
                };
                return fetchUserDataSuccess({ userData: user });
              }),
              catchError((error) => of(fetchUserDataError({ error }))),
            ),
          ),
        ),
      ),
    );
  });

  loadUserGists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserDataSuccess),
      switchMap(({ userData: { username } }) =>
        this.userService.getUserGists(username).pipe(
          map((data) => {
            const gists: UserGistsState[] = data.map((gist) => ({
              url: gist.html_url,
              fileName: Object.keys(gist.files)[0],
            }));
            return fetchUserGistsSuccess({ gists });
          }),
          catchError((error) => of(fetchUserGistsError({ error }))),
        ),
      ),
    );
  });

  loadUserTopRepos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserDataSuccess),
      switchMap(({ userData: { username } }) =>
        this.userService.getUserTopRepos(username).pipe(
          map((data) => {
            const topRepos: UserReposState[] = data.map((repo) => ({
              name: repo.name,
              description: repo.description,
              language: repo.language,
              stargazers_count: repo.stargazers_count,
              forks_count: repo.forks_count,
              private: repo.private,
              updated_at: repo.updated_at,
              fork: repo.fork,
              archived: repo.archived,
              license: repo.license
                ? {
                    key: repo.license.key,
                    name: repo.license.name,
                    spdx_id: repo.license.spdx_id,
                    url: repo.license.url,
                    node_id: repo.license.node_id,
                  }
                : null,
              owner: {
                login: repo.owner.login,
              },
            }));
            return fetchUserTopReposSuccess({ topRepos });
          }),
          catchError((error) => of(fetchUserTopReposError({ error }))),
        ),
      ),
    );
  });

  constructor(
    public actions$: Actions,
    private userService: UserService,
    private store: Store,
  ) {}
}
