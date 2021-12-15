import { TestBed } from '@angular/core/testing';

import { IssuesStore } from './issues.store';

describe('IssuesComponentStoreService', () => {
  let service: IssuesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
