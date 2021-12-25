import { Injectable } from '@angular/core';
import { NetworkStatus } from '@apollo/client/core';
import {
  ORDER_BY_DIRECTION,
  ProfileFilterState,
  ProfileReposFilterStore,
} from '@filter-store';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { map, Observable, switchMap, withLatestFrom } from 'rxjs';
import {
  Repo,
  Repos,
  UserRepoDetails,
  UserReposData,
  UserReposVars,
  USER_REPOS_QUERY,
} from 'src/app/gql';
import { filterRepos } from './filter-repos';
import { parseLanguages } from './parse-languages';
import { parseQuery } from './parse-profile-repos';

export interface ProfileReposState {
  repos: UserRepoDetails;
  resultCount: number;
  reposLoaded: boolean;
}

const INITIAL_REPOS_STATE: UserRepoDetails = {
  owner: '',
  repos: [],
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
  },
  data: {} as UserReposData,
  loading: false,
  networkStatus: NetworkStatus.ready,
};

const INITIAL_PROFILE_REPOS_STATE: ProfileReposState = {
  repos: INITIAL_REPOS_STATE,
  resultCount: 0,
  reposLoaded: false,
};

@Injectable({
  providedIn: 'root',
})
export class ProfileReposStore extends ComponentStore<ProfileReposState> {
  // *********** Updaters *********** //

  readonly setRepos = this.updater(
    (state, { owner, repos }: Partial<Repos>) => ({
      ...state,
      repos: { ...state.repos, repos, owner },
    }),
  );

  readonly setReposLoaded = this.updater((state, value: boolean) => ({
    ...state,
    reposLoaded: value,
  }));

  // *********** Selectors *********** //

  readonly reposDetails$ = this.select(({ repos }) => repos);

  readonly repos$ = this.select(({ repos }) => repos.repos);

  readonly resultCount$ = this.select(
    this.reposDetails$,
    (repos) => repos.repos?.length,
  );

  readonly reposLoaded$ = this.select(({ reposLoaded }) => reposLoaded);

  // *********** Effects *********** //

  readonly getProfileRepos = this.effect(
    (target$: Observable<ProfileFilterState>) =>
      target$.pipe(
        switchMap((state) =>
          this.routeConfigService.getLeafConfig<string>('username').pipe(
            switchMap((owner: string) =>
              this.apollo
                .watchQuery<UserReposData, UserReposVars>({
                  query: USER_REPOS_QUERY,
                  variables: {
                    username: owner,
                    // TODO: have the following controlled by filter state
                    orderBy: state.sort,
                    afterCursor: state.afterCursor ?? undefined,
                    beforeCursor: state.beforeCursor ?? undefined,
                  },
                })
                .valueChanges.pipe(
                  tapResponse(
                    (res) => {
                      const repos = parseQuery(res.data);
                      const filteredRepos = filterRepos(repos.repos, state);

                      if (!state.languagesLoaded) {
                        const languages = parseLanguages(filteredRepos);
                        this.profileReposFilterStore.setLanguages(languages);
                      }

                      this.setRepos({ owner, repos: filteredRepos });
                      this.setReposLoaded(true);
                    },
                    (err) => {
                      console.log(err);
                    },
                  ),
                ),
            ),
          ),
        ),
      ),
  );

  readonly search = this.effect((target$: Observable<ProfileFilterState>) =>
    target$.pipe(
      withLatestFrom(this.repos$),
      map(([state, repos]) => {
        const filteredRepos = filterRepos(repos as Repo[], state);
        this.setRepos({ repos: filteredRepos });
      }),
    ),
  );

  constructor(
    private profileReposFilterStore: ProfileReposFilterStore,
    private routeConfigService: RouteConfigService<string, 'username'>,
    private apollo: Apollo,
  ) {
    super(INITIAL_PROFILE_REPOS_STATE);
  }
}
