import { defineConfig } from "cypress";
import * as jose from "jose";

export default defineConfig({
  env: {
    authUrl: "/",
    JWT_SECRET:
      "7ZkCMuD69N2WBBDCDzxTTYvsNG8qPJHWeNYe37iZTkmQLUmujZUZ3RnkqP6yfxTU",
    JWT_SIGNING_KEY:
      '{"kty":"oct","kid":"6f3fzrvXzvbJ66XfW3QbeU6WfNWm3Z5KwKt5fDSOsdI","alg":"HS512","k":"mq_ZTza3MtzKDyy7r47-bOeZcvzfsy3VfIsdfT-n5W-KA4mxUy-6Yy9GjISuo3aNfPpzXRDIsM0mS-tFdCuULg"}',
    JWT_ENCRYPTION_KEY:
      '{"kty":"oct","kid":"noSwokthOcoRCtufQ3Eyp_x_cIshHpKBRanEVreZwnc","alg":"A256GCM","k":"GdCtl3XPLxKfdUQOFyWEPbe27tOPOJ9Z7-RPAdz_Vrc"}',
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
        // Adapted from: https://github.com/nextauthjs/next-auth/blob/dda4e0a7d8121b50f9cc9f1810424020427ef5de/packages/next-auth/src/jwt/index.ts#L17-L26
        generateNextAuthJWT(jwtOptions) {
          const maxAge = 30 * 24 * 60 * 60; // 30 days
          const signingKey = jose.JWK.asKey(JSON.parse(jwtOptions.signingKey));
          const signedJWT = jose.JWT.sign(jwtOptions.token, signingKey, {
            expiresIn: `${maxAge}s`,
          });
          const encryptionKey = jose.JWK.asKey(
            JSON.parse(jwtOptions.encryptionKey)
          );
          const encryptedJWT = jose.JWE.encrypt(signedJWT, encryptionKey, {
            alg: "dir",
            enc: "A256GCM",
            zip: "DEF",
          });
          return encryptedJWT;
        },
      });
    },
  },
});
