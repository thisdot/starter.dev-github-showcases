import { TestBed } from '@angular/core/testing';

import { ProfileReposStore } from './profile-repos.store';

describe('ProfileReposStore', () => {
  let service: ProfileReposStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileReposStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
