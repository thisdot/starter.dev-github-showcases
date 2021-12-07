import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

interface AuthResponse {
  access_token: string;
  bearer: string;
  scope: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  /**
   * Performs initial sign in to Github to retrieve authentication code.
   *
   * @return {*}  {Observable<any>}
   * @memberof AuthService
   */
  signin(): Observable<any> {
    // this.tokenService.removeToken();
    // this.tokenService.removeRefreshToken();
    return this.httpClient.get(`${environment.API_URL}/auth/signin`);
  }

  /**
   * Returns the access_token and stores it in a cookie.
   *
   * Once the user accepts Github authentication, they're redirected to
   * `RedirectComponent` which fetches the token. The code comes from a query
   * appended to the callback url on redirect.
   *
   * @param {string} code - code used to verify authentication
   * @return {*}  {Observable<AuthResponse>} - token object shape
   * @memberof AuthService
   */
  getToken(code: string): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${environment.API_URL}/auth/signin/callback`, {
        code,
      })
      .pipe(tap((data) => this.tokenService.saveToken(data.access_token)));
  }

  /**
   * Clear cookies and relevant server information.
   *
   * @return {*}  {Observable<any>}
   * @memberof AuthService
   */
  signout(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/auth/signout`);
  }

  /**
   * Verify a user is still authenticated.
   *
   * @return {*}  {boolean} - authentication status
   * @memberof AuthService
   */
  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}
