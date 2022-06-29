/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import {
  hasOperationName,
  aliasQuery,
  hasVariables,
} from "../utils/graphql-test-utils";
import * as interceptors from "../utils/interceptors.json";
import { View } from "../utils/view";
import { InterceptResponse } from "../utils/intercept-response";

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
    .then((encryptedToken: string) =>
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
    .then((encryptedToken: string) => {
      cy.setCookie("__session", encryptedToken, options);
    });

  Cypress.Cookies.preserveOnce("__session");
});

Cypress.Commands.add("interceptGraphQLCalls", (view, response) => {
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
        fixture: interceptor.fixture[response] ?? interceptor.fixture,
      });
      requestHandled = true;
    });

    if (!requestHandled) {
      req.continue();
    }
  });
});

Cypress.Commands.add("interceptRestCalls", (view, response) => {
  let restCalls = interceptors[view]?.rest;

  restCalls.forEach((interceptor) => {
    cy.intercept("GET", new RegExp(interceptor.url), (req) => {
      aliasQuery(req, interceptor.alias);
      req.reply({
        fixture: interceptor.fixture[response] ?? interceptor.fixture,
      });
    });
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to mock NextAuth's Session cookie.
       * @example cy.mockNextAuthCookie()
       */
      mockNextAuthCookie(): Chainable;
      /**
       * Custom command to mock RemixAuth's Session cookie.
       * @example cy.mockRemixAuthCookie()
       */
      mockRemixAuthCookie(): Chainable;
      /**
       * Custom command to intercept GraphQL calls for a given view and response type.
       * @example cy.interceptGraphQLCalls(View.Repository, InterceptResponse.Full)
       */
      interceptGraphQLCalls(view: View, response: InterceptResponse): Chainable;
      /**
       * Custom command to intercept Rest calls for a given view and response type.
       * @example cy.interceptGraphQLCalls(View.Repository, InterceptResponse.Full)
       */
      interceptRestCalls(view: View, response: InterceptResponse): Chainable;
    }
  }
}
