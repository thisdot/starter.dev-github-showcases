import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  UserOrgsApiResponse,
  UserOrgsState,
  UserReposApiResponse,
  UserReposState,
} from 'src/app/state/profile/profile.state';
import { UserApiResponse, UserState } from 'src/app/state/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAuthenticatedUserInfo(): Observable<UserState> {
    const url = `${environment.githubUrl}/user`;

    return this.http.get<UserApiResponse>(url).pipe(
      map((data) => ({
        avatar: data.avatar_url,
        bio: data.bio,
        blog: data.blog,
        company: data.company,
        email: data.email,
        followers: data.followers,
        following: data.following,
        location: data.location,
        name: data.name,
        twitter_username: data.twitter_username,
        username: data.login,
      })),
    );
  }

  getUserInfo(username: string): Observable<UserState> {
    const url = `${environment.githubUrl}/users/${encodeURIComponent(
      username,
    )}`;

    return this.http.get<UserApiResponse>(url).pipe(
      map((data) => ({
        avatar: data.avatar_url,
        bio: data.bio,
        blog: data.blog,
        company: data.company,
        email: data.email,
        followers: data.followers,
        following: data.following,
        location: data.location,
        name: data.name,
        twitter_username: data.twitter_username,
        username: data.login,
      })),
    );
  }

  getUserOrganizations(username: string): Observable<UserOrgsState[]> {
    const url = `https://api.github.com/users/${encodeURIComponent(
      username,
    )}/orgs`;

    return this.http.get<UserOrgsApiResponse>(url).pipe(
      map((data) =>
        data.map((org) => ({
          id: org.id,
          login: org.login,
          avatar_url: org.avatar_url,
        })),
      ),
    );
  }

  getUserRepos(username: string): Observable<UserReposState[]> {
    const url = `https://api.github.com/users/${encodeURIComponent(
      username,
    )}/repos`;

    return this.http.get<UserReposApiResponse>(url).pipe(
      map((data) =>
        data.map((repo) => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          private: repo.private,
          updated_at: repo.updated_at,
          license: repo.license,
        })),
      ),
    );
  }
}
