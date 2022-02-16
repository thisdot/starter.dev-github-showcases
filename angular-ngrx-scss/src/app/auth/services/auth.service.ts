import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { SignInResponse, AuthResponse } from '../interfaces/auth';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) {}

  /**
   * Performs initial sign in with GitHub and gets authentication code
   *
   * @returns {*} {Observable<SignInResponse>}
   */
  signIn(): Observable<SignInResponse> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    return this.httpClient.get<SignInResponse>(
      `${environment.apiUrl}/auth/signin`,
    );
  }

  /**
   * Returns the access_token and stores it in local storage.
   *
   * Once the user accepts Github authentication, they're redirected to
   * `RedirectComponent` which fetches the token. The code comes from a query
   * appended to the callback url on redirect.
   *
   * @param {string} code - code used to verify authentication
   * @return {*}  {Observable<AuthResponse>}
   */
  getToken(code: string): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${environment.apiUrl}/auth/signin/callback`, {
        code,
      })
      .pipe(tap((data) => this.tokenService.saveToken(data.access_token)));
  }

  /**
   * Verify if a user is authenticated.
   *
   * @return {*}  {boolean} - authentication status
   */
  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}
