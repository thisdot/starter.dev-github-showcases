import { Injectable } from '@angular/core';
import { NetworkStatus } from '@apollo/client/core';
import { ProfileFilterState, ProfileReposFilterStore } from '@filter-store';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { map, Observable, switchMap, withLatestFrom } from 'rxjs';
import {
  OrgReposData,
  OrgReposVars,
  ORG_REPOS_QUERY,
  Repo,
  Repos,
  UserRepoDetails,
  UserReposData,
  UserReposVars,
  USER_REPOS_QUERY,
} from 'src/app/gql';
import { ProfileDetails } from '../profile.resolver';
import { filterRepos } from './filter-repos';
import { parseLanguages } from './parse-languages';
import {
  parseOrgReposQuery,
  parseProfileReposQuery,
} from './parse-profile-repos';

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

  readonly getRepos = this.effect((target$: Observable<ProfileFilterState>) =>
    target$.pipe(
      switchMap((state) =>
        this.routeConfigService
          .getLeafConfig<ProfileDetails>('profile')
          .pipe(
            switchMap(({ owner, isOrg }: ProfileDetails) =>
              isOrg
                ? this.getOrgProfileRepos(owner, state)
                : this.getProfileRepos(owner, state),
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
    private routeConfigService: RouteConfigService<string, 'profile'>,
    private apollo: Apollo,
  ) {
    super(INITIAL_PROFILE_REPOS_STATE);
  }

  private getProfileRepos(owner: string, state: ProfileFilterState) {
    return this.apollo
      .watchQuery<UserReposData, UserReposVars>({
        query: USER_REPOS_QUERY,
        variables: {
          username: owner,
          orderBy: state.sort,
          afterCursor: state.afterCursor ?? undefined,
          beforeCursor: state.beforeCursor ?? undefined,
        },
      })
      .valueChanges.pipe(
        tapResponse(
          (res) => {
            const repos = parseProfileReposQuery(res.data);
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
      );
  }

  private getOrgProfileRepos(owner: string, state: ProfileFilterState) {
    return this.apollo
      .watchQuery<OrgReposData, OrgReposVars>({
        query: ORG_REPOS_QUERY,
        variables: {
          orgname: owner,
          orderBy: state.sort,
          afterCursor: state.afterCursor ?? undefined,
          beforeCursor: state.beforeCursor ?? undefined,
        },
      })
      .valueChanges.pipe(
        tapResponse(
          (res) => {
            const repos = parseOrgReposQuery(res.data);
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
      );
  }
}
