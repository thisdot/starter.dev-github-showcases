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

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("task", {
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
};
