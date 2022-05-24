/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const jose = require("jose");
const cookieSignature = require("cookie-signature");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
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
};
