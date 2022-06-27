import { defineConfig } from "cypress";
import * as cookieSignature from "cookie-signature";

export default defineConfig({
  env: {
    authUrl: "/",
    remixCookieOptions: {
      name: "__session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cr3t"],
      secure: false,
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
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
