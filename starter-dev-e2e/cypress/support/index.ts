import "./commands";
import { View } from "../utils/view";

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
       * Custom command to intercept GraphQL calls for a given view.
       * @example cy.interceptGraphQLCalls(View.Repository)
       */
      interceptGraphQLCalls(view: View): Chainable;
      /**
       * Custom command to intercept Rest calls for a given view.
       * @example cy.interceptGraphQLCalls(View.Repository)
       */
      interceptRestCalls(view: View): Chainable;
    }
  }
}

beforeEach(() => {
  cy.intercept(/.*\/auth.token/, {
    fixture: "auth/token.json",
  }).as("token");
  cy.mockNextAuthCookie();
  cy.mockRemixAuthCookie();
  cy.interceptGraphQLCalls(View.Dashboard);
  cy.interceptRestCalls(View.Dashboard);
  cy.visit(Cypress.env("authUrl"));
});
