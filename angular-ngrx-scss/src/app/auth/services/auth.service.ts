import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthResponse } from '../interfaces/auth';
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
  signIn(): void {
    this.tokenService.removeToken();
    window.location.href = `${environment.apiUrl}/auth/signin?redirect_url=${environment.redirectUrl}`;
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
  getToken(): Observable<string | undefined> {
    return this.httpClient
      .get<AuthResponse>(`${environment.apiUrl}/auth/token`, {
        withCredentials: true,
      })
      .pipe(
        map((data) => data.access_token),
        tap((token) => token && this.tokenService.saveToken(token)),
      );
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
