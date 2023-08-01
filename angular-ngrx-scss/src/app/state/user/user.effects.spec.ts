import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { UserService } from '../../user/services/user.service';
import {
  UserGistsApiResponse,
  UserGistsState,
  UserRepo,
  UserReposApiResponse,
  UserReposState,
} from '../profile/profile.state';
import {
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserGistsSuccess,
  fetchUserTopReposSuccess,
} from './user.actions';
import { UserEffects } from './user.effects';
import { selectUserLoginName } from './user.selectors';
import { UserApiResponse, UserState } from './user.state';

const USER_STATE_MOCK: UserState = {
  username: 'thisdot',
  avatar: '',
  bio: '',
  blog: '',
  company: '',
  email: '',
  followers: 0,
  following: 0,
  location: '',
  name: '',
  twitterUsername: '',
  type: 'User',
};

const MOCK_USER_API_RESPONSE: UserApiResponse = {
  avatar_url: '',
  bio: '',
  blog: '',
  company: '',
  email: '',
  followers: 0,
  following: 0,
  location: '',
  name: '',
  twitter_username: '',
  login: 'thisdot',
  type: 'User',
} as UserApiResponse;

const MOCK_USER_GISTS: UserGistsApiResponse = [
  {
    comments: 0,
    comments_url: '',
    commits_url: '',
    created_at: '',
    forks_url: '',
    git_pull_url: '',
    git_push_url: '',
    html_url: 'github.com/gists',
    id: '',
    node_id: '',
    public: true,
    truncated: false,
    updated_at: '',
    url: 'github.com/gists',
    files: {
      'textfile1.txt': {
        filename: 'textfile1.txt',
      },
    },
  },
];

const MOCK_TOP_REPOS: UserReposApiResponse = [
  {
    name: 'Repo-test',
    description: 'This is a repo test',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    private: false,
    updated_at: '2022-06-17T09:54:38Z',
    license: null,
    fork: false,
    archived: false,
    owner: {
      login: 'thisdot',
    },
  } as UserRepo,
  {
    name: 'Repo-test-2',
    description: 'This is a repo test 2',
    language: 'Javascript',
    stargazers_count: 0,
    forks_count: 0,
    private: false,
    updated_at: '2022-06-17T09:54:38Z',
    license: null,
    fork: false,
    archived: false,
    owner: {
      login: 'thisdot',
    },
  } as UserRepo,
  {
    name: 'Repo-test-3',
    description: 'This is a repo test 2',
    language: 'Javascript',
    stargazers_count: 0,
    forks_count: 0,
    private: false,
    updated_at: '2022-06-17T09:54:38Z',
    license: null,
    fork: false,
    archived: false,
    owner: {
      login: 'thisdot',
    },
  } as UserRepo,
];

describe('UserEffects', () => {
  let actions$: Observable<Action>;
  let effects: UserEffects;
  let store: MockStore;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('UserService', {
      getUserGists: () => {
        return of();
      },
      getUserTopRepos: () => {
        return of();
      },
      getUserInfo: () => {
        return of();
      },
    });
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        {
          provide: UserService,
          useValue: userServiceMock,
        },
        provideMockStore({
          selectors: [
            {
              selector: selectUserLoginName,
              value: {
                username: 'thisdot',
              },
            },
          ],
        }),
        UserEffects,
        provideMockActions(() => actions$),
      ],
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store = TestBed.inject(MockStore);
    effects = TestBed.inject(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should get the user info from the API', (done) => {
    actions$ = of(fetchUserData({ username: 'thisdot' }));
    const expectedUserData = USER_STATE_MOCK;

    userServiceMock.getUserInfo.and.returnValue(of(MOCK_USER_API_RESPONSE));

    effects.loadUser$.subscribe((action) => {
      expect(action).toEqual(
        fetchUserDataSuccess({ userData: expectedUserData }),
      );
      done();
    });
  });

  it('should get the user gists from the Github API', (done) => {
    actions$ = of(fetchUserDataSuccess({ userData: USER_STATE_MOCK }));
    const expectedUserData: UserGistsState[] = [
      {
        url: 'github.com/gists',
        fileName: 'textfile1.txt',
      },
    ];

    userServiceMock.getUserGists.and.returnValue(of(MOCK_USER_GISTS));

    effects.loadUserGists$.subscribe((action) => {
      expect(action).toEqual(
        fetchUserGistsSuccess({ gists: expectedUserData }),
      );
      done();
    });
  });

  it('should get the top repositories from the Github API', (done) => {
    actions$ = of(fetchUserDataSuccess({ userData: USER_STATE_MOCK }));
    const expectedUserData: UserReposState[] = [
      {
        name: 'Repo-test',
        description: 'This is a repo test',
        language: 'TypeScript',
        stargazers_count: 0,
        forks_count: 0,
        private: false,
        updated_at: '2022-06-17T09:54:38Z',
        license: null,
        fork: false,
        archived: false,
        owner: {
          login: 'thisdot',
        },
      },
      {
        name: 'Repo-test-2',
        description: 'This is a repo test 2',
        language: 'Javascript',
        stargazers_count: 0,
        forks_count: 0,
        private: false,
        updated_at: '2022-06-17T09:54:38Z',
        license: null,
        fork: false,
        archived: false,
        owner: {
          login: 'thisdot',
        },
      },
      {
        name: 'Repo-test-3',
        description: 'This is a repo test 2',
        language: 'Javascript',
        stargazers_count: 0,
        forks_count: 0,
        private: false,
        updated_at: '2022-06-17T09:54:38Z',
        license: null,
        fork: false,
        archived: false,
        owner: {
          login: 'thisdot',
        },
      },
    ];

    userServiceMock.getUserTopRepos.and.returnValue(of(MOCK_TOP_REPOS));

    effects.loadUserTopRepos$.subscribe((action) => {
      expect(action).toEqual(
        fetchUserTopReposSuccess({ topRepos: expectedUserData }),
      );
      done();
    });
  });
});
