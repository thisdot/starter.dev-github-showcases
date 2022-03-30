import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';

import { ProfileEffects } from './profile.effects';

describe('ProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: ProfileEffects;
  let userServiceMock: any;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('UserService', {
      getAuthenticatedUserInfo: () => {
        return of();
      },
    });
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: userServiceMock,
        },
        ProfileEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(ProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
