import "./commands";

beforeEach(() => {
  cy.intercept(`GET`, `https://api.starter.dev/api/auth/token`, {
    fixture: `auth/token.json`,
  }).as(`token`);
  cy.intercept(`POST`, `/auth/github`, {
    fixture: `auth/token.json`,
  }).as(`token`);
  cy.mockNextAuthJWT();
  cy.visit(Cypress.env(`authUrl`));
});
