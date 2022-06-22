import { HttpClient } from '@angular/common/http';
import { of, delay } from 'rxjs';
import {
  RepoApiResponse,
  RepoContents,
  RepoState,
} from 'src/app/state/repository';

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
      description: 'A collection of GitHub clone implementations.',
      forkCount: 20,
      issueCount: 30,
      ownerName: '',
      prCount: 0,
      readme: '',
      repoName: 'starter.dev-github-showcases',
      starCount: 100,
      tags: ['react', 'angular', 'vue', 'github'],
      tree: [],
      visibility: 'public',
      watchCount: 10,
      website: 'https://starter.dev',
    };

    const expectedHttpResponse: Partial<RepoApiResponse> = {
      name: 'starter.dev-github-showcases',
      description: 'A collection of GitHub clone implementations.',
      homepage: 'https://starter.dev',
      visibility: 'public',
      watchers_count: 10,
      stargazers_count: 100,
      forks_count: 20,
      open_issues_count: 30,
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

  it('should return the root file tree for the provided repository', (done) => {
    const expectedResponse: RepoContents[] = [
      {
        name: '.github',
        type: 'file',
      },
      {
        name: 'angular-ngrx-scss',
        type: 'dir',
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedResponse).pipe(delay(0)));

    repoService
      .getRepositoryContents('thisdot', 'starter.dev-github-showcases')
      .subscribe((res) => {
        expect(res).toEqual(expectedResponse);
        done();
      });

    expect(httpClientSpy.get.calls.count()).withContext('called once').toBe(1);
  });
});
