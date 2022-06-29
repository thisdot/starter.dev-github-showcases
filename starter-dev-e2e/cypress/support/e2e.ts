import "./commands.ts";
import { View } from "../utils/view";

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
