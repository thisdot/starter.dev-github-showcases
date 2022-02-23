import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
}
