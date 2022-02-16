import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token';

// TODO: convert to use `httpOnly` cookie if applicable
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  getToken(): string | null {
    return sessionStorage.getItem(ACCESS_TOKEN);
  }

  saveToken(token: string): void {
    sessionStorage.setItem(ACCESS_TOKEN, token);
  }

  removeToken(): void {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
