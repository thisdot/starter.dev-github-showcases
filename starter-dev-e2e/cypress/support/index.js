import "./commands";

beforeEach(() => {
  cy.intercept(/.*\/auth.token/, {
    fixture: "auth/token.json",
  }).as("token");
  cy.mockNextAuthCookie();
  cy.mockRemixAuthCookie();
  cy.visit(Cypress.env("authUrl"));
});
