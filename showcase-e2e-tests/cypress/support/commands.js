Cypress.Commands.add("mockNextAuth", () => {
  cy.intercept("/api/auth/session", { fixture: "auth/session.json" }).as(
    "session"
  );

  cy.setCookie("next-auth.session-token", "your-valid-token");

  Cypress.Cookies.preserveOnce("next-auth.session-token");
});
