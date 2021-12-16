import { TestBed } from '@angular/core/testing';

import { PullRequestsStore } from './pull-requests.store';

describe('PullRequestsStore', () => {
  let service: PullRequestsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullRequestsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
