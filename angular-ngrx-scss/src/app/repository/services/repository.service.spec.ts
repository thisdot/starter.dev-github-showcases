import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, of } from 'rxjs';
import {
  PullRequestAPIResponse,
  RepoApiResponse,
  RepoContentsApiResponse,
} from 'src/app/state/repository';
import {
  IssueComments,
  Issues,
  PullRequest,
  PullRequests,
} from './repository.interfaces';

import { generatePullRequestAPIResponseFixture } from '../../fixtures/repository.fixtures';
import { RepositoryService } from './repository.service';

const MOCK_ISSUES: Issues = [
  {
    number: 30734,
    state: 'open',
    title: 'Aperiam voluptas rem laborum consequatur.',
    body: 'Odit consectetur et eius natus eum aut est placeat. Pariatur soluta vero animi culpa perferendis.',
    user: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: true,
    },
    labels: [],
    assignee: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    assignees: [],
    locked: false,
    active_lock_reason:
      'Aliquid corrupti dignissimos doloremque non dolore. Sed veritatis debitis et vero cupiditate voluptates. Quia assumenda et blanditiis molestiae incidunt eius natus voluptas.',
    comments: 2527,
    closed_at: '2022-07-01T23:46:12Z',
    created_at: '2022-07-01T23:46:12Z',
    updated_at: '2022-07-01T23:46:12Z',
    closed_by: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'Sapiente distinctio corporis possimus ea.',
      type: 'Eum sit in omnis nihil cum.',
      site_admin: true,
    },
  },
  {
    number: 80993,
    state: 'open',
    title:
      'Consectetur incidunt earum. Sed est reprehenderit repellendus. Earum voluptatem sapiente. Culpa quia molestias quisquam. Ut cupiditate iure et.',
    body: 'Magnam autem eum voluptas voluptatibus.',
    user: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    labels: [],
    assignee: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    assignees: [],
    locked: false,
    active_lock_reason: 'Ipsam et vitae.',
    comments: 54569,
    closed_at: '2022-07-01T23:46:12Z',
    created_at: '2022-07-01T23:46:12Z',
    updated_at: '2022-07-01T23:46:12Z',
    closed_by: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
  },
  {
    number: 56355,
    state: 'closed',
    title:
      'Iusto hic aut.\nDignissimos et id officiis ut ut exercitationem aliquid.',
    body:
      'Velit soluta vel rerum officia consequatur voluptatem ea sunt.\n' +
      'Hic et aut nihil.\n' +
      'Nulla recusandae enim.\n' +
      'Non hic eligendi aspernatur.',
    user: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    labels: [],
    assignee: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    assignees: [],
    locked: false,
    active_lock_reason: 'error',
    comments: 46453,
    closed_at: '2022-07-01T23:46:12Z',
    created_at: '2022-07-01T23:46:12Z',
    updated_at: '2022-07-01T23:46:12Z',
    closed_by: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
  },
];

const MOCK_PULL_REQUEST_NUMBER = 11814;

const MOCK_PULL_REQUEST_COMMENTS: IssueComments = [
  {
    body: 'I am a comment!',
    user: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    created_at: '2022-07-01T23:46:12Z',
    updated_at: '2022-07-01T23:46:12Z',
    author_association: 'OWNER',
  },
  {
    body: 'I am also a comment!',
    user: {
      login: 'jack',
      avatar_url: 'http://localhost',
      gravatar_id: 'jack',
      type: '',
      site_admin: false,
    },
    created_at: '2022-07-01T23:46:12Z',
    updated_at: '2022-07-01T23:46:12Z',
    author_association: 'FIRST_TIMER',
  },
];

const MOCK_PULL_REQUEST: PullRequest = {
  title: 'Et quis culpa ex sapiente dolores qui quo qui.',
  number: MOCK_PULL_REQUEST_NUMBER,
  user: {
    login: 'user',
    avatar_url: 'http://localhost',
    gravatar_id: 'user',
    type: '',
    site_admin: false,
  },
  closed_at: '2022-07-01T23:46:12Z',
  created_at: '2022-07-01T23:46:12Z',
};

const MOCK_PULL_REQUESTS: PullRequests = [
  {
    title: 'Et quis culpa ex sapiente dolores qui quo qui.',
    number: MOCK_PULL_REQUEST_NUMBER,
    user: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    closed_at: '2022-07-01T23:46:12Z',
    created_at: '2022-07-01T23:46:12Z',
  },
  {
    title: 'Another test pull request.',
    number: MOCK_PULL_REQUEST_NUMBER,
    user: {
      login: 'user2',
      avatar_url: 'http://localhost',
      gravatar_id: 'user2',
      type: '',
      site_admin: false,
    },
    closed_at: '2022-07-02T23:46:12Z',
    created_at: '2022-07-02T23:46:12Z',
  },
];

describe('RepositoryService', () => {
  let repoService: RepositoryService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    repoService = new RepositoryService(httpClientSpy);
  });

  it('should return information on the provided repository', (done) => {
    const expectedHttpResponse = {
      name: 'starter.dev-github-showcases',
      description: 'A collection of GitHub clone implementations.',
      homepage: 'https://starter.dev',
      visibility: 'public',
      watchers_count: 10,
      stargazers_count: 100,
      forks_count: 20,
      open_issues_count: 30,
      topics: ['react', 'angular', 'vue', 'github'],
      default_branch: 'main',
    } as RepoApiResponse;

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    repoService
      .getRepositoryInfo('thisdot', 'starter.dev-github-showcases')
      .subscribe({
        next: (repoInfo) => {
          expect(repoInfo).toEqual(expectedHttpResponse);

          expect(httpClientSpy.get).toHaveBeenCalledOnceWith(
            `https://api.github.com/repos/thisdot/starter.dev-github-showcases`,
            jasmine.objectContaining({
              headers: {
                Accept: 'application/vnd.github.v3+json',
              },
            }),
          );
          done();
        },
        error: done.fail,
      });
    expect(httpClientSpy.get.calls.count()).withContext('called once').toBe(1);
  });

  describe('getRepositoryContents', () => {
    const expectedResponse: RepoContentsApiResponse[] = [
      {
        name: '.github',
        path: '.github',
        sha: '',
        size: 1234,
        url: '',
        html_url: '',
        git_url: '',
        download_url: '',
        type: 'file',
        encoding: '',
        content: 'file contents',
        _links: {
          self: '',
          git: '',
          html: '',
        },
      },
      {
        name: 'angular-ngrx-scss',
        path: 'angular-ngrx-scss',
        sha: '',
        size: 1234,
        url: '',
        html_url: '',
        git_url: '',
        download_url: '',
        type: 'dir',
        encoding: '',
        content: 'file contents',
        _links: {
          self: '',
          git: '',
          html: '',
        },
      },
    ];
    beforeEach(() => {
      httpClientSpy.get.and.returnValue(of(expectedResponse).pipe(delay(0)));
    });
    it('should return the root file tree for the provided repository', (done) => {
      repoService
        .getRepositoryContents('thisdot', 'starter.dev-github-showcases')
        .subscribe((res) => {
          expect(res).toEqual(expectedResponse);
          done();
        });

      expect(httpClientSpy.get.calls.count())
        .withContext('called once')
        .toBe(1);
    });

    it('should make request with appropriate url if "path" argument is supplied', (done) => {
      repoService
        .getRepositoryContents(
          'thisdot',
          'starter.dev-github-showcases',
          'README.md',
        )
        .subscribe(() => {
          done();
        });

      expect(httpClientSpy.get).toHaveBeenCalledOnceWith(
        'https://api.github.com/repos/thisdot/starter.dev-github-showcases/contents/README.md',
        jasmine.objectContaining({
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }),
      );
    });
  });

  it('should return a pull request when given a pull request number', (done) => {
    httpClientSpy.get.and.returnValue(of(MOCK_PULL_REQUEST));

    repoService
      .getRepositoryPullRequest('FakeCo', 'fake-repo', MOCK_PULL_REQUEST_NUMBER)
      .subscribe({
        next: (pullRequest) => {
          expect(pullRequest).toBe(MOCK_PULL_REQUEST);

          expect(httpClientSpy.get).toHaveBeenCalledWith(
            `https://api.github.com/repos/FakeCo/fake-repo/pulls/${MOCK_PULL_REQUEST_NUMBER}`,
            jasmine.objectContaining({
              headers: {
                Accept: 'application/vnd.github.v3+json',
              },
            }),
          );
        },
        complete: done,
      });
  });

  it('should return multiple pull requests for a given repository', (done) => {
    httpClientSpy.get.and.returnValue(of(MOCK_PULL_REQUESTS));

    repoService.getRepositoryPullRequests('FakeCo', 'fake-repo').subscribe({
      next: (pullRequests) => {
        expect(pullRequests).toBe(MOCK_PULL_REQUESTS);

        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/repos/FakeCo/fake-repo/pulls`,
          jasmine.objectContaining({
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }),
        );
      },
      complete: done,
    });
  });

  it('should return pull request comments when given a pull request number', (done) => {
    httpClientSpy.get.and.returnValue(of(MOCK_PULL_REQUEST_COMMENTS));

    repoService
      .getRepositoryPullRequestComments(
        'FakeCo',
        'fake-repo',
        MOCK_PULL_REQUEST_NUMBER,
      )
      .subscribe({
        next: (comments) => {
          expect(comments).toBe(MOCK_PULL_REQUEST_COMMENTS);

          expect(httpClientSpy.get).toHaveBeenCalledWith(
            `https://api.github.com/repos/FakeCo/fake-repo/issues/${MOCK_PULL_REQUEST_NUMBER}/comments`,
            jasmine.objectContaining({
              headers: {
                Accept: 'application/vnd.github.v3+json',
              },
            }),
          );
        },
        complete: done,
      });
  });

  it('should return issues associated with a provided repository with default parameters', (done) => {
    httpClientSpy.get.and.returnValue(of(MOCK_ISSUES));

    repoService.getRepositoryIssues('FakeCo', 'fake-repo').subscribe({
      next: (repos) => {
        expect(repos).toBe(MOCK_ISSUES);

        expect(httpClientSpy.get).toHaveBeenCalledWith(
          'https://api.github.com/repos/FakeCo/fake-repo/issues',
          jasmine.objectContaining({
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
            params: new HttpParams({
              fromObject: {
                state: 'all',
                sort: 'created',
                direction: 'desc',
                per_page: 30,
                page: 1,
              },
            }),
          }),
        );
      },
      complete: done,
    });
  });

  it('should return issues associated with a provided repository with an overridden parameter', (done) => {
    httpClientSpy.get.and.returnValue(of(MOCK_ISSUES));

    repoService
      .getRepositoryIssues('FakeCo', 'fake-repo', { state: 'closed' })
      .subscribe({
        next: (repos) => {
          expect(repos).toBe(MOCK_ISSUES);

          expect(httpClientSpy.get).toHaveBeenCalledWith(
            'https://api.github.com/repos/FakeCo/fake-repo/issues',
            jasmine.objectContaining({
              headers: {
                Accept: 'application/vnd.github.v3+json',
              },
              params: new HttpParams({
                fromObject: {
                  state: 'closed',
                  sort: 'created',
                  direction: 'desc',
                  per_page: 30,
                  page: 1,
                },
              }),
            }),
          );
        },
        complete: done,
      });
  });

  describe('getPullRequests', () => {
    it('should return pull request for given repository', (done) => {
      const apiResponse: PullRequestAPIResponse =
        generatePullRequestAPIResponseFixture();

      httpClientSpy.get.and.returnValue(of(apiResponse).pipe(delay(0)));
      repoService
        .getPullRequests('thisdot', 'starter.dev-github-showcases', 'open')
        .subscribe((res) => {
          expect(res).toEqual(apiResponse);
          done();
        });

      expect(httpClientSpy.get.calls.count())
        .withContext('called once')
        .toBe(1);
      expect(httpClientSpy.get).toHaveBeenCalledOnceWith(
        'https://api.github.com/search/issues?q=repo:thisdot/starter.dev-github-showcases+type:pr+state:open',
        jasmine.objectContaining({
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }),
      );
    });
  });
});
