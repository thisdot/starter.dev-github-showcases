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
    cy.get(`[data-testid="profile header avatar"]`).should("be.visible");
    cy.get(
      `[data-testid="profile page avatar"], [data-testid="profile header avatar"]`
    )
      .should("have.attr", "src")
      .then((src) => {
        expect(src).to.contain(
          "https://avatars.githubusercontent.com/u/22839396?v=4"
        );
      });
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
    cy.get('[data-testid="profile repo list heading"] h3')
      .should("have.length", 6)
      .and(($h3) => {
        expect($h3.get(0).textContent, "first item").to.equal("sentry Public ");
        expect($h3.get(5).textContent, "last item").to.equal(
          "javascript-marathon-vue-js Public "
        );
      });
  });

  it("should be able to search for specific repo", () => {
    cy.get("input#search")
      .type("sentry{enter}")
      .get(".content")
      .contains("sentry")
      .should("have.length", 1);
  });

  it("should have working sort options, type, and language selection", () => {
    cy.get(`[data-testid="profile repos selection"]`)
      .find("button")
      .should("have.length", 3)
      .and(($btn) => {
        expect($btn.get(0).textContent, "first button").to.equal(" Type ");
        expect($btn.get(2).textContent, "last button").to.equal(" Sort ");
      });
    cy.get(`[data-testid="profile type button"]`)
      .click()
      .should("contain", "All")
      .and("contain", "Forks")
      .and("contain", "Archived");
    cy.get(`[data-testid="profile language button"]`)
      .click()
      .should("contain", "All")
      .and("contain", "Python")
      .and("contain", "JavaScript")
      .and("contain", "TypeScript");
    cy.get(`[data-testid="profile sort button"]`)
      .click()
      .should("contain", "Last updated")
      .and("contain", "Name")
      .and("contain", "Stars");
  });

  it("should be able to click into repository", () => {
    cy.get(`[data-testid="profile repo list heading"]`)
      .contains("starter.dev-github-showcases")
      .click()
      .wait("@gqlCurrentUserQuery")
      .wait("@gqlRepoPageQuery")
      .wait("@gqlRepoReadMeQuery")
      .get(`[data-testid="readme"]`)
      .should("be.visible");
  });
});
