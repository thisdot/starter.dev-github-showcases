import { defineConfig } from "cypress";
import * as jose from "jose";
import * as cookieSignature from "cookie-signature";
//const jose = require("jose");
//const cookieSignature = require("cookie-signature");

export default defineConfig({
  e2e: {
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

        // Adapted from: https://github.com/remix-run/remix/blob/dce27e2664de022f183f34f7a1e3034fa0e6d414/packages/remix-server-runtime/cookies.ts#L146-L158
        generateRemixAuthJWT(jwtOptions) {
          const value = jwtOptions.value;
          const secrets = jwtOptions.options.secrets;

          let encoded = Buffer.from(JSON.stringify(value), "binary").toString(
            "base64"
          );

          if (secrets.length > 0) {
            encoded = cookieSignature.sign(encoded, secrets[0]);
          }

          return encoded;
        },
      });
    },
  },
});
