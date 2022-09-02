import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  UserGistsApiResponse,
  UserOrgsApiResponse,
  UserReposApiResponse,
} from 'src/app/state/profile/profile.state';
import { UserApiResponse } from 'src/app/state/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * Gets details for the authenticated user
   * Important to note that this is specifically for the currently authenticated user
   * @returns the full GH response with the user's account info
   */
  getAuthenticatedUserInfo(): Observable<UserApiResponse> {
    const url = `${environment.githubUrl}/user`;

    return this.http.get<UserApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets details on the provided user
   * @returns the full GH response with the user's account info
   * @param username (string)
   */
  getUserInfo(username: string): Observable<UserApiResponse> {
    const url = `${environment.githubUrl}/users/${username}`;

    return this.http.get<UserApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * PROFILE API CALLS
   */

  /**
   * Gets a list of organizations the user is part of
   * @returns the full GH response containing a list of the user's organizations
   * @param username (string)
   */
  getUserOrganizations(username: string): Observable<UserOrgsApiResponse> {
    const url = `${environment.githubUrl}/users/${username}/orgs`;

    return this.http.get<UserOrgsApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets a list of repositories belonging to the user
   * @returns the full GH response of a list of associated repositories
   * @param username (string)
   */
  getUserRepos(username: string): Observable<UserReposApiResponse> {
    const url = `${environment.githubUrl}/users/${username}/repos`;

    return this.http.get<UserReposApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * DASHBOARD API CALLS
   */

  /**
   * Gets the user's "top repositories" - the first 20 most recently updated repositories they have access to
   * @returns the full GH response of the user's repositories, sorted by update time
   * @param username (string)
   */
  getUserTopRepos(username: string): Observable<UserReposApiResponse> {
    const defaultParams = {
      sort: 'updated',
      per_page: 20,
    };

    const url = `${environment.githubUrl}/users/${username}/repos`;

    return this.http.get<UserReposApiResponse>(url, {
      params: new HttpParams({
        fromObject: { ...Object.assign(defaultParams) },
      }),
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets the user's gists
   * @returns the full GH response of an array of gists the user has created
   * @param username (string)
   */
  getUserGists(username: string): Observable<UserGistsApiResponse> {
    const url = `${environment.githubUrl}/users/${username}/gists`;

    return this.http.get<UserGistsApiResponse>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }
}
