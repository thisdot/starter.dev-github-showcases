import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserGistsSuccess,
  fetchUserTopReposSuccess,
} from './user.actions';
import { UserService } from '../../user/services/user.service';
import { UserEffects } from './user.effects';
import { UserState } from './user.state';
import { UserGistsState, UserReposState } from '../profile/profile.state';

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
  twitter_username: '',
  type: '',
};

describe('UserEffects', () => {
  let actions$: Observable<Action>;
  let effects: UserEffects;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('UserService', {
      getAuthenticatedUserInfo: () => {
        return of();
      },
      getUserGists: () => {
        return of();
      },
      getUserTopRepos: () => {
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
        UserEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should get the user info from the API', (done) => {
    actions$ = of(fetchUserData());
    const expectedUserData: UserState = {
      avatar: '',
      bio: '',
      blog: '',
      company: '',
      email: '',
      followers: 0,
      following: 0,
      location: '',
      name: '',
      twitter_username: '',
      username: 'lindakatcodes',
      type: 'User',
    };

    userServiceMock.getAuthenticatedUserInfo.and.returnValue(
      of(expectedUserData),
    );

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

    userServiceMock.getUserGists.and.returnValue(of(expectedUserData));

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

    userServiceMock.getUserTopRepos.and.returnValue(of(expectedUserData));

    effects.loadUserTopRepos$.subscribe((action) => {
      expect(action).toEqual(
        fetchUserTopReposSuccess({ topRepos: expectedUserData }),
      );
      done();
    });
  });
});
