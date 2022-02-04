import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TokenService } from 'src/app/auth/services/token.service';
import { UserApiResponse } from 'src/app/state/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userToken = this.tokenService.getToken();
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `token ${this.userToken}`,
    }),
  };
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getUserInfo(): Observable<UserApiResponse> {
    return this.http
      .get<UserApiResponse>(`${environment.githubUrl}/user`, this.httpOptions)
      .pipe(map((data) => data));
  }
}
