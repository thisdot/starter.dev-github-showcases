import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

// TODO: convert to use `httpOnly` cookie if applicable
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  getToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  saveToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }
}
