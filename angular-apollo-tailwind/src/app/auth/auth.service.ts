import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

interface AuthResponse {
  access_token?: string;
}

interface SignoutRepsonse {
  message: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) {}

  /**
   * Performs initial sign in to Github to retrieve authentication code.
   *
   * @return {*}  {Observable<any>}
   * @memberof AuthService
   */
  signin(): void {
    this.tokenService.removeToken();
    window.location.href = `${environment.apiUrl}/auth/signin?redirect_url=${environment.redirectUrl}`;
  }

  /**
   * Returns the access_token and stores it in a cookie.
   *
   * Once the user accepts Github authentication, front-end will poll
   * for the token.
   *
   * @return {*}  {Observable<string>} - token
   * @memberof AuthService
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
   * Clear cookies and relevant server information.
   *
   * @return {*}  {Observable<any>}
   * @memberof AuthService
   */
  signout(): Observable<SignoutRepsonse> {
    this.tokenService.removeToken();
    return this.httpClient.post<SignoutRepsonse>(
      `${environment.apiUrl}/auth/signout`,
      null,
    );
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
