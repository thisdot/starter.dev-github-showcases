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
   * Initiates sign in with GitHub and provides a redirect url
   *
   * @returns void
   */
  signIn(): void {
    this.tokenService.removeToken();
    window.location.href = `${environment.apiUrl}/api/auth/signin?redirect_url=${environment.redirectUrl}`;
  }

  /**
   * Calls the server to get the user's access token and saves it
   *
   * @return {*}  {Observable<string | undefined>}
   */
  saveUserToken(): Observable<string | undefined> {
    return this.httpClient
      .get<AuthResponse>(`${environment.apiUrl}/api/auth/token`, {
        withCredentials: true,
      })
      .pipe(
        map((data) => data.access_token),
        tap((token) => token && this.tokenService.saveToken(token)),
      );
  }
}
