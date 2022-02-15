import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
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

  it('should return user data from the GitHub API', (done) => {
    const expectedResponse: UserState = {
      avatar: 'lindakatcodes_url',
      username: 'lindakatcodes',
    };

    const expectedHttpResponse: Partial<UserApiResponse> = {
      avatar_url: 'lindakatcodes_url',
      login: 'lindakatcodes',
    };

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse).pipe(delay(0)));

    userService.getAuthenticatedUserInfo().subscribe((res) => {
      expect(res).toEqual(expectedResponse);
      done();
    });

    expect(httpClientSpy.get.calls.count()).withContext('called once').toBe(1);
  });
});
