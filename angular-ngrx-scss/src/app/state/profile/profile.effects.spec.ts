import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProfileEffects } from './profile.effects';

describe('ProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: ProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
