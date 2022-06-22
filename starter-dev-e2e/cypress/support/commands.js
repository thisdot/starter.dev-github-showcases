import {
  hasOperationName,
  aliasQuery,
  hasVariables,
} from "../utils/graphql-test-utils";
import * as interceptors from "../utils/interceptors.json";

Cypress.Commands.add("mockNextAuthCookie", () => {
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

Cypress.Commands.add("mockRemixAuthCookie", () => {
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

Cypress.Commands.add("interceptGraphQLCalls", (view) => {
  cy.intercept("POST", /.*\/graphql/, (req) => {
    var requestHandled = false;

    let viewCalls = interceptors[view]?.graphql;
    viewCalls?.forEach((interceptor) => {
      if (requestHandled || !hasOperationName(req, interceptor.name)) {
        return;
      }

      let variables = interceptor.variables;
      if (variables && !hasVariables(req, variables)) {
        return;
      }

      aliasQuery(req, interceptor.alias);
      req.reply({
        fixture: interceptor.fixture,
      });
      requestHandled = true;
    });

    if (!requestHandled) {
      req.continue();
    }
  });
});

Cypress.Commands.add("interceptRestCalls", (view) => {
  let restCalls = interceptors[view]?.rest;

  restCalls.forEach((interceptor) => {
    cy.intercept("GET", new RegExp(interceptor.url), (req) => {
      aliasQuery(req, interceptor.alias);
      req.reply({
        fixture: interceptor.fixture,
      });
    });
  });
});
