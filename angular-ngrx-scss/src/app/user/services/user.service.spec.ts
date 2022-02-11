import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TokenService } from 'src/app/auth/services/token.service';
import { UserApiResponse, UserState } from 'src/app/state/user';
import { environment } from 'src/environments/environment';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  // let httpController: HttpTestingController;
  let tokenServiceSpy: jasmine.SpyObj<TokenService>;

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule],
    // });
    // httpController = TestBed.inject(HttpTestingController);
    tokenServiceSpy = jasmine.createSpyObj('TokenService', ['getToken']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy, tokenServiceSpy);

    const userToken = tokenServiceSpy.getToken.and.returnValue('1234');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `token ${userToken}`,
      }),
    };
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

    userService.getUserInfo().subscribe((res) => {
      expect(res).toEqual(expectedResponse);
      done();
    });

    expect(httpClientSpy.get.calls.count()).withContext('called once').toBe(1);

    // const req = httpController.expectOne({
    //   method: 'GET',
    //   url: `${environment.githubUrl}/user`,
    // });

    // req.flush(expectedResponse);
  });
});
