import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserState } from '.';

import { UserService } from '../../user/services/user.service';
import { UserEffects } from './user.effects';

describe('UserEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: UserEffects;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['getUserInfo']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should get the user info from the API', () => {
    actions$ = of({ type: '[User API] User data requested' });
    const expectedUserData: UserState = {
      avatar: '',
      username: 'lindakatcodes',
    };

    userServiceSpy.getUserInfo.and.returnValue(of(expectedUserData));

    effects.loadUser$.subscribe((action) => {
      expect(action).toEqual({
        type: '[User API] User Data successfully received',
        userData: expectedUserData,
      });
    });
  });
});
