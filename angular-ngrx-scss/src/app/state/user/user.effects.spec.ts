import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { fetchUserData, fetchUserDataSuccess } from '.';
import { UserService } from '../../user/services/user.service';
import { UserEffects } from './user.effects';
import { UserState } from './user.state';

describe('UserEffects', () => {
  let actions$: Observable<Action>;
  let effects: UserEffects;
  let userServiceMock: any;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('UserService', {
      getAuthenticatedUserInfo: () => {
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
});
