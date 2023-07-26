import NextAuth, { DefaultSession } from "next-auth"
// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module 'next-auth/jwt' {
  interface Session {
    user: {
      accessToken: string;
      name: string;
      email: string;
      picture: string;
      sub: string;
      iat: number;
      exp: number;
      jti: string;
    } & DefaultSession["user"]
  }
}
