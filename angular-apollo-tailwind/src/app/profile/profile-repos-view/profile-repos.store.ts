import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { RouteConfigService } from '@this-dot/route-config';
import {
  map,
  Observable,
  switchMap,
  withLatestFrom,
  tap,
  catchError,
} from 'rxjs';
import {
  ProfileFilterState,
  ProfileReposFilterStore,
} from '../../components/filters/profile-repos-filter-store';
import { OrgReposGQL, ProfileDetails, Repo, UserReposGQL } from '../../gql';
import { filterRepos } from './filter-repos';
import { parseLanguages } from './parse-languages';
import {
  parseOrgReposQuery,
  parseProfileReposQuery,
} from './parse-profile-repos';

export interface ProfileReposState {
  owner: string;
  repos?: Repo[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  resultCount: number;
  reposLoaded: boolean;
  reposLoadError?: unknown;
}

const INITIAL_PROFILE_REPOS_STATE: ProfileReposState = {
  owner: '',
  repos: undefined,
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
  },
  resultCount: 0,
  reposLoaded: false,
  reposLoadError: undefined,
};

const CURSOR_TWENTY_FIVE = 25;
const CURSOR_TEN = 10;

@Injectable({
  providedIn: 'root',
})
export class ProfileReposStore extends ComponentStore<ProfileReposState> {
  // *********** Updaters *********** //

  readonly setOwner = this.updater((state, owner: string) => ({
    ...state,
    owner,
  }));

  readonly setRepos = this.updater((state, repos: Repo[] | undefined) => ({
    ...state,
    repos,
  }));

  readonly setPageInfo = this.updater((state, pageInfo: any) => ({
    ...state,
    pageInfo,
  }));

  readonly setReposLoaded = this.updater((state, reposLoaded: boolean) => ({
    ...state,
    reposLoaded,
  }));

  readonly setReposLoadError = this.updater(
    (state, reposLoadError?: unknown) => ({
      ...state,
      reposLoadError,
    }),
  );

  readonly setResultCount = this.updater((state, resultCount: number) => ({
    ...state,
    resultCount,
  }));

  // *********** Selectors *********** //

  readonly owner$ = this.select(({ repos }) => repos);

  readonly repos$ = this.select(({ repos }) => repos);

  readonly resultCount$ = this.select(({ resultCount }) => resultCount);

  readonly reposLoaded$ = this.select(({ reposLoaded }) => reposLoaded);

  readonly reposLoadError$ = this.select(
    ({ reposLoadError }) => reposLoadError,
  );

  readonly pageInfo$ = this.select(({ pageInfo }) => pageInfo);

  // *********** Effects *********** //

  readonly getRepos = this.effect((target$: Observable<ProfileFilterState>) =>
    target$.pipe(
      tap(() => this.setReposLoadError(undefined)),
      switchMap((state) =>
        this.routeConfigService.getLeafConfig<ProfileDetails>('profile').pipe(
          switchMap(({ owner, isOrg }: ProfileDetails) =>
            isOrg
              ? this.getOrgProfileRepos(owner, state)
              : this.getProfileRepos(owner, state),
          ),
          catchError((err: unknown) => {
            this.setReposLoadError(err);
            throw err;
          }),
        ),
      ),
    ),
  );

  readonly search = this.effect((target$: Observable<ProfileFilterState>) =>
    target$.pipe(
      withLatestFrom(this.repos$),
      map(([state, repos]) => {
        const filteredRepos = repos ? filterRepos(repos, state) : undefined;
        this.setRepos(filteredRepos);
      }),
    ),
  );

  constructor(
    private profileReposFilterStore: ProfileReposFilterStore,
    private routeConfigService: RouteConfigService<string, 'profile'>,
    private userReposGQL: UserReposGQL,
    private orgReposGQL: OrgReposGQL,
    private activatedRoute: ActivatedRoute,
  ) {
    super(INITIAL_PROFILE_REPOS_STATE);
  }

  private getProfileRepos(owner: string, state: ProfileFilterState) {
    const endCursor = this.activatedRoute.snapshot.queryParams['after'];
    const startCursor = this.activatedRoute.snapshot.queryParams['before'];
    const last = startCursor ? CURSOR_TWENTY_FIVE : undefined;
    let first = endCursor ? CURSOR_TWENTY_FIVE : undefined;

    if (!endCursor && !startCursor) {
      first = CURSOR_TWENTY_FIVE;
    }

    return this.userReposGQL
      .watch({
        username: owner,
        orderBy: state.sort,
        afterCursor: endCursor,
        beforeCursor: startCursor,
        first: first,
        last: last,
      })
      .valueChanges.pipe(
        tapResponse(
          (res) => {
            const repos = parseProfileReposQuery(res.data);

            if (!repos) {
              throw 'repos error';
            }

            const filteredRepos = filterRepos(
              repos.repos as unknown as Repo[],
              state,
            );

            if (!state.languagesLoaded) {
              const languages = parseLanguages(filteredRepos);
              this.profileReposFilterStore.setLanguages(languages);
            }

            this.setOwner(owner);
            this.setRepos(filteredRepos);
            this.setReposLoaded(true);
            this.setPageInfo(res.data.user?.repositories.pageInfo);
            this.setResultCount(filteredRepos.length);
          },
          (err) => {
            console.log(err);
          },
        ),
      );
  }

  private getOrgProfileRepos(owner: string, state: ProfileFilterState) {
    const endCursor = this.activatedRoute.snapshot.queryParams['after'];
    const startCursor = this.activatedRoute.snapshot.queryParams['before'];
    const last = startCursor ? CURSOR_TEN : undefined;
    let first = endCursor ? CURSOR_TEN : undefined;

    if (!endCursor && !startCursor) {
      first = CURSOR_TEN;
    }

    return this.orgReposGQL
      .watch({
        orgname: owner,
        orderBy: state.sort,
        afterCursor: endCursor,
        beforeCursor: startCursor,
        first: first,
        last: last,
      })
      .valueChanges.pipe(
        tapResponse(
          (res) => {
            const repos = parseOrgReposQuery(res.data, owner);

            if (!repos) {
              throw 'repos error';
            }

            const filteredRepos = filterRepos(
              repos.repos as unknown as Repo[],
              state,
            );

            if (!state.languagesLoaded) {
              const languages = parseLanguages(filteredRepos);
              this.profileReposFilterStore.setLanguages(languages);
            }

            this.setOwner(owner);
            this.setRepos(filteredRepos);
            this.setReposLoaded(true);
            this.setPageInfo(res.data.organization?.repositories.pageInfo);
            this.setResultCount(filteredRepos.length);
          },
          (err) => {
            console.log(err);
          },
        ),
      );
  }
}
