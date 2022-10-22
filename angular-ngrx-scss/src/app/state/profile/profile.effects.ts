import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, combineLatest, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import { UserState } from '../user';
import {
  fetchProfile,
  fetchProfileFailure,
  fetchProfileSuccess,
} from './profile.actions';
import { UserOrgsState, UserReposState } from './profile.state';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchProfile),
      switchMap(({ username }) =>
        combineLatest([
          this.userService.getUserInfo(username),
          this.userService.getUserOrganizations(username),
          this.userService.getUserRepos(username),
        ]).pipe(
          map(([userData, orgsData, reposData]) => {
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
              twitterUsername: userData.twitter_username,
              username: userData.login,
              type: userData.type,
            };
            const orgs: UserOrgsState[] = orgsData.map((org) => ({
              id: org.id,
              login: org.login,
              avatar_url: org.avatar_url,
            }));
            const repos: UserReposState[] = reposData.map((repo) => ({
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
            return fetchProfileSuccess({ data: { user, orgs, repos } });
          }),
          catchError((error) => {
            console.error(error);
            return of(fetchProfileFailure({ error }));
          }),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
