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
    const redirectUrl = this.getRedirectUrl();
    window.location.href = `${environment.apiUrl}/api/auth/signin?redirect_url=${redirectUrl}`;
  }

  signOut(): void {
    this.tokenService.removeToken();
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

  /**
   * Determines the host of the page, and uses that to create a redirect url
   */
  getRedirectUrl() {
    const prPreviewRegex =
      /deploy-preview-(?:\d+)--angular-ngrx-scss.netlify.app/;
    const currentUrlHost = window.location.host;
    const prMatch = prPreviewRegex.test(currentUrlHost);
    let redirectUrl: string;
    if (prMatch) {
      redirectUrl = `https://${currentUrlHost}/redirect`;
    } else {
      redirectUrl = environment.redirectUrl;
    }
    return redirectUrl;
  }
}
