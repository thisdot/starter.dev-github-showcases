import { hasOperationName, aliasQuery } from "../utils/graphql-test-utils";

describe("Sign in", () => {
  beforeEach(() => {
    cy.intercept("POST", "/graphql", (req) => {
      if (hasOperationName(req, "CurrentUser")) {
        aliasQuery(req, "CurrentUser");
        req.reply({
          fixture: "user/currentUser.graphql.json",
        });
        return;
      }

      if (hasOperationName(req, "UserTopRepos")) {
        aliasQuery(req, "UserTopRepos");
        req.reply({
          fixture: "user/userTopRepos.graphql.json",
        });
        return;
      }

      if (hasOperationName(req, "UserGists")) {
        aliasQuery(req, "UserGists");
        req.reply({
          fixture: "user/userGist.graphql.json",
        });
        return;
      }

      req.continue();
    });
    cy.intercept("GET", "/user", {
      fixture: "user/currentUser.json",
    }).as("restCurrentUser");
    cy.intercept(
      "GET",
      "/user/repos?sort=updated&affiliation=owner,collaborator,organization_member&per_page=20",
      {
        fixture: "user/userTopRepos.json",
      }
    ).as("restUserTopRepos");
  });

  describe("My First Test", () => {
    it("top repos should be listed", () => {
      //TODO: In #264, we should properly look for elements using `[data-testid="some-test-id"]`
      cy.get("h2").should("be.visible");
    });
  });
});
