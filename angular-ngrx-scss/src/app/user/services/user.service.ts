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
        username: data.login,
        name: data.name,
        bio: data.bio,
        twitter_username: data.twitter_username,
        email: data.email,
        location: data.location,
        company: data.company,
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
        username: data.login,
        name: data.name,
        bio: data.bio,
        twitter_username: data.twitter_username,
        email: data.email,
        location: data.location,
        company: data.company,
      })),
    );
  }
}
