import { HttpClient } from '@angular/common/http';
import { of, delay } from 'rxjs';
import { RepoApiResponse, RepoState } from 'src/app/state/repository';

import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let repoService: RepositoryService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    repoService = new RepositoryService(httpClientSpy);
  });

  it('should return information on the provided repository', (done) => {
    const expectedResponse: RepoState = {
      repoName: 'starter.dev-github-showcases',
      description: 'A collection of GitHub clone implementations.',
      website: 'starter.dev',
      visibility: 'public',
      watchCount: 100,
      starCount: 100,
      forkCount: 5,
      issueCount: 0,
      tags: ['react', 'angular', 'vue', 'github'],
    };

    const expectedHttpResponse: Partial<RepoApiResponse> = {
      name: 'starter.dev-github-showcases',
      description: 'A collection of GitHub clone implementations.',
      homepage: 'starter.dev',
      visibility: 'public',
      watchers_count: 100,
      stargazers_count: 100,
      forks_count: 5,
      open_issues_count: 0,
      topics: ['react', 'angular', 'vue', 'github'],
    };

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse).pipe(delay(0)));

    repoService
      .getRepositoryInfo('thisdot', 'starter.dev-github-showcases')
      .subscribe((res) => {
        expect(res).toEqual(expectedResponse);
        done();
      });

    expect(httpClientSpy.get.calls.count()).withContext('called once').toBe(1);
  });
});
