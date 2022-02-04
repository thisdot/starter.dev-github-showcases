import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NavEffects } from './nav.effects';

describe('NavEffects', () => {
  let actions$: Observable<any>;
  let effects: NavEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NavEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NavEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
