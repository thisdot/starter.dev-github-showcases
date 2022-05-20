Cypress.Commands.add("mockNextAuthJWT", () => {
  const signingKey = Cypress.env("JWT_SIGNING_KEY");
  const encryptionKey = Cypress.env("JWT_ENCRYPTION_KEY");
  if (!signingKey || !encryptionKey) {
    return;
  }

  cy.intercept("/api/auth/session", {
    fixture: "auth/next-auth.session.json",
  }).as("session");

  cy.fixture("auth/next-auth.session.json")
    .then((sessionJSON) =>
      cy.task("generateNextAuthJWT", {
        signingKey,
        encryptionKey,
        token: sessionJSON,
      })
    )
    .then((encryptedToken) =>
      cy.setCookie("next-auth.session-token", encryptedToken)
    );

  Cypress.Cookies.preserveOnce("next-auth.session-token");
});

Cypress.Commands.add("mockRemixAuthJWT", () => {
  const options = Cypress.env("remixCookieOptions");
  if (!options) {
    return;
  }

  cy.fixture("auth/remix-auth.session.json")
    .then((sessionJSON) =>
      cy.task("generateRemixAuthJWT", {
        value: sessionJSON,
        options,
      })
    )
    .then((encryptedToken) => {
      cy.setCookie("__session", encryptedToken, options);
    });

  Cypress.Cookies.preserveOnce("__session");
});
