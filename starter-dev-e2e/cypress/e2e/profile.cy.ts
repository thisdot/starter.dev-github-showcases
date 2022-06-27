import { View } from "../utils/view";

describe("Profile Page", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Profile);
    cy.interceptRestCalls(View.Profile);

    cy.visit("/thisdot");
  });

  it("should display correct name and username", () => {
    cy.get(`[data-testid="profile page name"]`)
      .should("be.visible")
      .and("contain.text", "thisdotlabs")
      .get(`[data-testid="profile page username"]`)
      .should("be.visible")
      .and("contain.text", "thisdot");
  });

  it("should display same profile and header avatar", () => {
    cy.wait("@UserProfileQuery")
      .get(`[data-testid="user avatar header"]`)
      .should("be.visible")
      .get(
        `[data-testid="profile page avatar"], [data-testid="user avatar header"]`
      )
      .should("have.attr", "src")
      .and(
        "match",
        /.*(https).*(avatars\.githubusercontent\.com).*(22839396).*/
      );
  });

  it("should display orgs in profile", () => {
    cy.get(`[data-testid="profile page orgs"]`)
    .should("have.length", 1);
  });

  it("should display correct count", () => {
    cy.get(`[data-testid="profile followers count"]`)
      .contains("10")
      .get(`[data-testid="profile following count"]`)
      .contains("12")
      .get(`[data-testid="profile starred count"]`)
      .contains("5");
  });

  it("should display correct repos", () => {
    cy.wait("@UserReposQuery")
      .get(`[data-testid="profile repo list heading"]`)
      .should("have.length", 6)
      .get(`[data-testid="repository name"]`)
      .and(($a) => {
        expect($a.get(0).textContent, "first item").to.contain("sentry");
        expect($a.get(5).textContent, "last item").to.contain(
          "javascript-marathon-vue-js"
        );
      });
  });

  it("should be able to search for specific repo", () => {
    cy.get("input#search")
      .type("sentry{enter}")
      .get(`[data-testid="repository list item"`)
      .contains("sentry")
      .should("have.length", 1);
  });

  it("should have working sort options, type, and language selection", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@UserReposQuery")
      .wait("@UserProfileQuery")
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
    cy.wait("@CurrentUserQuery")
      .wait("@UserReposQuery")
      .wait("@UserProfileQuery")
      .get(`[data-testid="profile repo list heading"]`)
      .contains("starter.dev-github-showcases")
      .click()
      .wait("@RepoPageQuery")
      .wait("@RepoTreeQuery")
      .wait("@RepoReadMeQuery")
      .get(`[data-testid="readme"]`)
      .should("be.visible");
  });
});
