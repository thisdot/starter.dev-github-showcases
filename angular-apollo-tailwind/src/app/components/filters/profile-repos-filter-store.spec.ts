import { TestBed } from '@angular/core/testing';

import { ProfileReposFilterStore } from './profile-repos-filter-store';

describe('ProfileReposFilterStore', () => {
  let service: ProfileReposFilterStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileReposFilterStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
