import { TestBed } from '@angular/core/testing';

import { ProfileResolver } from './profile.resolver';

describe('ProfileDataResolver', () => {
  let resolver: ProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
