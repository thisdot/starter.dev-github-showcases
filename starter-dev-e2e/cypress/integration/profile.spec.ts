import { hasOperationName, aliasQuery } from "../utils/graphql-test-utils";

describe("Profile Page", () => {
  beforeEach(() => {
    cy.intercept("POST", "/graphql", (req) => {
      if (hasOperationName(req, "CurrentUser")) {
        aliasQuery(req, "CurrentUser");
        req.reply({
          fixture: "user/currentUser.graphql.json",
        });
        return;
      }

      if (hasOperationName(req, "UserProfile")) {
        aliasQuery(req, "UserProfile");
        req.reply({
          fixture: "user/userProfile.graphql.json",
        });
        return;
      }

      if (hasOperationName(req, "UserRepos")) {
        aliasQuery(req, "UserRepos");
        req.reply({
          fixture: "user/userRepos.graphql.json",
        });
        return;
      }

      if (hasOperationName(req, "RepoTree")) {
        aliasQuery(req, "RepoTree");
        req.reply({
          fixture: "repo/repoTree.graphql.json",
        });
        return true;
      }

      if (hasOperationName(req, "RepoPage")) {
        aliasQuery(req, "RepoPage");
        req.reply({
          fixture: "repo/repoPage.graphql.json",
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
    cy.visit("/thisdot");
  });

  it("should display correct name and username", () => {
    cy.get(`[data-testid="profile page name"]`).should("be.visible");
    cy.get(`[data-testid="profile page username"]`).should("be.visible");
  });

  it("should display same profile and header avatar", () => {
    cy.wait("@gqlUserProfileQuery");
    cy.get(`[data-testid="profile header avatar"]`).should("be.visible");
    cy.get(
      `[data-testid="profile page avatar"], [data-testid="profile header avatar"]`
    )
      .should("have.attr", "src")
      .and(
        "match",
        /.*(https).*(avatars\.githubusercontent\.com).*(22839396).*/
      );
  });

  it("should display orgs in profile", () => {
    cy.get(`[data-testid="profile page orgs"]`).should("have.length", 1);
  });

  it("should display correct count", () => {
    cy.get(`[data-testid="profile followers count"]`).contains("10");
    cy.get(`[data-testid="profile following count"]`).contains("12");
    cy.get(`[data-testid="profile starred count"]`).contains("5");
  });

  it("should display correct repos", () => {
    cy.wait("@gqlUserReposQuery");
    cy.get(`[data-testid="profile repo list heading"]`)
      .should("have.length", 6)
      .and(($h3) => {
        expect($h3.get(0).textContent, "first item").to.contain("sentry");
        expect($h3.get(5).textContent, "last item").to.contain(
          "javascript-marathon-vue-js"
        );
      });
  });

  it("should be able to search for specific repo", () => {
    cy.get("input#search")
      .type("sentry{enter}")
      .get(`[data-testid="profile repos"]`)
      .contains("sentry")
      .should("have.length", 1);
  });

  it("should have working sort options, type, and language selection", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlUserReposQuery")
      .wait("@gqlUserProfileQuery")
      .get(`[data-testid="filters dropdown Type"]`)
      .click()
      .get(`[data-testid="filters dropdown Type items"]`)
      .should("be.visible")
      .get(`[data-testid="filters dropdown item All"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown item Forks"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown item Archived"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown Language items"]`)
      .should("be.visible")
      .get(`[data-testid="filters dropdown item All"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown item TypeScript"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown item JavaScript"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown item Python"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown Sort items"]`)
      .should("be.visible")
      .get(`[data-testid="filters dropdown item Last updated"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown item Name"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Name")
      .get(`[data-testid="filters dropdown item Stars"]`)
      .should("exist")
      .and("be.visible");
  });

  it("should be able to click into repository", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlUserReposQuery")
      .wait("@gqlUserProfileQuery");
    cy.get(`[data-testid="profile repo list heading"]`)
      .contains("starter.dev-github-showcases")
      .click()
      .wait("@gqlRepoPageQuery")
      .wait("@gqlRepoReadMeQuery")
      .get(`[data-testid="readme"]`)
      .should("be.visible");
  });
});
