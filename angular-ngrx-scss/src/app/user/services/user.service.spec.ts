import { HttpClient } from '@angular/common/http';
import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  UserGist,
  UserGistsState,
  UserRepo,
  UserReposState,
} from 'src/app/state/profile/profile.state';
import { UserApiResponse, UserState } from 'src/app/state/user';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return user data from the GitHub API', fakeAsync(() => {
    const expectedResponse: UserState = {
      avatar: 'lindakatcodes_url',
      bio: '',
      blog: '',
      company: '',
      email: '',
      followers: 0,
      following: 0,
      location: '',
      name: '',
      twitter_username: '',
      username: 'lindakatcodes',
      type: 'User',
    };

    const expectedHttpResponse: Partial<UserApiResponse> = {
      avatar_url: 'lindakatcodes_url',
      bio: '',
      blog: '',
      company: '',
      email: '',
      followers: 0,
      following: 0,
      location: '',
      login: 'lindakatcodes',
      name: '',
      twitter_username: '',
      type: 'User',
    };

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    const result = {};

    userService.getAuthenticatedUserInfo().subscribe((res) => {
      Object.assign(result, res);
    });
    tick(1000);

    expect(result).toEqual(expectedResponse);
    expect(httpClientSpy.get.calls.count()).withContext('called once').toBe(1);
  }));

  it('should return the top repositories from the Github API', fakeAsync(() => {
    const expectedResponse: UserReposState[] = [
      {
        name: 'Repo-test',
        description: 'This is a repo test',
        language: 'TypeScript',
        stargazers_count: 0,
        forks_count: 0,
        private: false,
        updated_at: '2022-06-17T09:54:38Z',
        license: null,
        fork: false,
        archived: false,
        owner: {
          login: 'thisdot',
        },
      },
      {
        name: 'Repo-test-2',
        description: 'This is a repo test 2',
        language: 'Javascript',
        stargazers_count: 0,
        forks_count: 0,
        private: false,
        updated_at: '2022-06-17T09:54:38Z',
        license: null,
        fork: false,
        archived: false,
        owner: {
          login: 'thisdot',
        },
      },
      {
        name: 'Repo-test-3',
        description: 'This is a repo test 2',
        language: 'Javascript',
        stargazers_count: 0,
        forks_count: 0,
        private: false,
        updated_at: '2022-06-17T09:54:38Z',
        license: null,
        fork: false,
        archived: false,
        owner: {
          login: 'thisdot',
        },
      },
    ];
    const expectedHttpResponse: Partial<UserRepo>[] = [
      {
        name: 'Repo-test',
        description: 'This is a repo test',
        language: 'TypeScript',
        license: null,
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        },
      },
      {
        name: 'Repo-test-2',
        description: 'This is a repo test 2',
        language: 'Javascript',
        license: null,
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        },
      },
      {
        name: 'Repo-test-3',
        description: 'This is a repo test 2',
        language: 'Javascript',
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        },
      },
    ];
    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    const result: UserReposState[] = [];

    userService.getUserTopRepos().subscribe((res) => {
      Object.assign(result, res);
    });
    tick(1000);

    expect(result).toEqual(expectedResponse);
    expect(httpClientSpy.get.calls.count()).withContext('called once').toBe(1);
  }));

  it('should return the gists from the user', fakeAsync(() => {
    const username = 'thisDot';
    const expectedResponse: UserGistsState[] = [
      {
        url: 'github.com/gists',
        fileName: 'textfile1.txt',
      },
    ];

    const expectedHttpResponse: Partial<UserGist>[] = [
      {
        html_url: 'github.com/gists',
        files: { 'textfile1.txt': { filename: 'textfile1.txt' } },
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    const result: UserGistsState[] = [];

    userService.getUserGists(username).subscribe((res) => {
      Object.assign(result, res);
    });
    tick(1000);

    expect(result).toEqual(expectedResponse);
  }));
});
