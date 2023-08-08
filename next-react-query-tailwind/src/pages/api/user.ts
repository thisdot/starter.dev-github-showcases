import { DefaultSession } from 'next-auth';

export type User = {
  accessToken: string;
  name: string;
  email: string;
  picture: string;
  sub: string;
  iat: number;
  exp: number;
  jti: string;
} & DefaultSession['user'];
