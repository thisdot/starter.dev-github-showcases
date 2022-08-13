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
   * Gets details on the signed in user
   * @returns the full GH response with the authenticated user's account info
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
   * PROFILE API CALLS
   */

  /**
   * Gets a list of organizations the authenticated user is part of
   * @returns the full GH response containing a list of the user's organizations
   */
  getUserOrganizations(): Observable<UserOrgsApiResponse[]> {
    const url = `${environment.githubUrl}/user/orgs`;

    return this.http.get<UserOrgsApiResponse[]>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets a list of repositories belonging to the authenticated user
   * @returns the full GH response of a list of associated repositories
   */
  getUserRepos(): Observable<UserReposApiResponse[]> {
    const url = `${environment.githubUrl}/user/repos`;

    return this.http.get<UserReposApiResponse[]>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * DASHBOARD API CALLS
   */

  /**
   * Gets the authenticated user's "top repositories" - the first 20 most recently updated repositories they have access to
   * @returns the full GH response of the user's repositories, sorted by update time
   */
  getUserTopRepos(): Observable<UserReposApiResponse[]> {
    const defaultParams = {
      sort: 'updated',
      per_page: 20,
    };

    const url = `${environment.githubUrl}/user/repos`;

    return this.http.get<UserReposApiResponse[]>(url, {
      params: new HttpParams({
        fromObject: { ...Object.assign(defaultParams) },
      }),
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Gets the authenticated user's gists
   * @returns the full GH response of an array of gists the user has created
   */
  getUserGists(): Observable<UserGistsApiResponse[]> {
    const url = `${environment.githubUrl}/gists`;

    return this.http.get<UserGistsApiResponse[]>(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }
}
