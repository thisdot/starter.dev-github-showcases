import "./commands";

beforeEach(() => {
  cy.intercept(`GET`, `https://api.starter.dev/api/auth/token`, {
    fixture: `auth/token.json`,
  }).as(`token`);
  cy.intercept(`POST`, `/auth/github`, {
    fixture: `auth/token.json`,
  }).as(`token`);
  //cy.mockNextAuth();
  cy.visit(Cypress.env(`authUrl`));

  cy.intercept(`GET`, `/user`, {
    fixture: `user/currentUser.json`,
  }).as(`user`);
});
