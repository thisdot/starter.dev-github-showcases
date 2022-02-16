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

  getUserInfo(): Observable<UserState> {
    return this.http.get<UserApiResponse>(`${environment.githubUrl}/user`).pipe(
      map((data) => ({
        avatar: data.avatar_url,
        username: data.login,
      })),
    );
  }
}
