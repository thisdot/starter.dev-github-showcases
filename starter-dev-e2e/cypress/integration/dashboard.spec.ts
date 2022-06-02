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

      if (hasOperationName(req, "RepoPage")) {
        aliasQuery(req, "RepoPage");
        req.reply({
          fixture: "repo/repoPage.graphql.json",
        });
        return true;
      }

      if (hasOperationName(req, "RepoTree")) {
        aliasQuery(req, "RepoTree");
        req.reply({
          fixture: "repo/repoTree.graphql.json",
        });
        return true;
      }

      if (hasOperationName(req, "RepoReadMe")) {
        aliasQuery(req, "RepoReadMe");
        req.reply({
          fixture: "repo/repoReadMe.graphql.json",
        });
        return true;
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

  it("should display list of gists", () => {
    cy.get(`[data-testid="show gists list"]`).should("be.visible");
    cy.contains('gist example 1').should('have.attr', 'href')
    .then(href => {
      expect(href).to.match(/https:\/\/gist\.github\.com/)
    });
  });

  it("top repos should be listed with valid repo links", () => {
    cy.get(`[data-testid="show repo list"]`).should(`be.visible`);
    cy.contains("starter.dev-github-showcases").click();
    cy.wait("@gqlRepoPageQuery")
      .wait("@gqlRepoTreeQuery")
      .wait("@gqlRepoReadMeQuery");
    cy.url().should("include", "/thisdot/starter.dev-github-showcases");
    cy.get(`[data-testid="readme"]`).should("be.visible");
  });

  it("should be able to see user's avatar in header", () => {
    cy.get(`[data-testid="user avatar header"]`).should(`be.visible`);
  });
});
