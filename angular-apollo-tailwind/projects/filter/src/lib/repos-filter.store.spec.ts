import { TestBed } from '@angular/core/testing';

import { ReposFilterStore } from './repos-filter.store';

describe('ReposFilterStore', () => {
  let service: ReposFilterStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposFilterStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
