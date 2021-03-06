import { View } from "../utils/view";
import { InterceptResponse } from "../utils/intercept-response";

describe("When there is proper profile page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Profile, InterceptResponse.Full);
    cy.interceptRestCalls(View.Profile, InterceptResponse.Full);

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
    cy.get(`[data-testid="profile page orgs"]`).should("have.length", 1);
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

  it("should be able to filter valid repos by type", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@UserReposQuery")
      .wait("@UserProfileQuery")
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "sentry")
      .get(`[data-testid="filters dropdown Type"]`)
      .click()
      .get(`[data-testid="filters dropdown item Forks"]`)
      .click()
      .get(`[data-testid="filterText"]`)
      .should("contain.text", "1")
      .get(`[data-testid="repository name"]`)
      .should("have.length", 1)
      .and("contain.text", "starter.dev")
      .get(`[data-testid="filters dropdown Type"]`)
      .click()
      .get(`[data-testid="filters dropdown item Archived"]`)
      .click()
      .get(`[data-testid="filterText"]`)
      .should("contain.text", "0")
      .get(`[data-testid="repository name"]`)
      .should("not.exist")
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "sentry");
  });

  it("should be able to filter valid repos by language", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@UserReposQuery")
      .wait("@UserProfileQuery")
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "sentry")
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown item Python"]`)
      .click()
      .get(`[data-testid="filterText"]`)
      .should("contain.text", "1")
      .get(`[data-testid="repository name"]`)
      .should("have.length", 1)
      .and("contain.text", "sentry")
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown item All"]`)
      .click()
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown item TypeScript"]`)
      .click()
      .get(`[data-testid="filterText"]`)
      .should("contain.text", "4")
      .get(`[data-testid="repository name"]`)
      .should("have.length", 4)
      .and("contain.text", "framework.dev")
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown item All"]`)
      .click()
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown item JavaScript"]`)
      .click()
      .get(`[data-testid="filterText"]`)
      .should("contain.text", "1")
      .get(`[data-testid="repository name"]`)
      .should("have.length", 1)
      .and("contain.text", "javascript-marathon-vue-js")
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "sentry");
  });

  it("should be able to sort valid repos", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@UserReposQuery")
      .wait("@UserProfileQuery")
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "sentry")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Name"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .and("contain.text", "starter.dev-github-showcases")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Stars"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "javascript-marathon-vue-js")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Last updated"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "sentry");
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

describe("When there is proper empty profile page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Profile, InterceptResponse.Empty);
    cy.interceptRestCalls(View.Profile, InterceptResponse.Empty);

    cy.visit("/thisdot");
  });

  it("should display correct name and username with empty information", () => {
    cy.get(`[data-testid="profile page name"]`)
      .should("be.visible")
      .and("contain.text", "thisdotlabs")
      .get(`[data-testid="profile page username"]`)
      .should("be.visible")
      .and("contain.text", "thisdot")
      .get(`[data-testid="profile followers count"]`)
      .contains("0")
      .get(`[data-testid="profile following count"]`)
      .contains("0")
      .get(`[data-testid="profile starred count"]`)
      .contains("0");
  });

  it("should have no organizations listed in profile", () => {
    cy.get(`[data-testid="profile page orgs"]`).should("not.exist");
  });

  it("should not display any repos or be able to paginate previous and next ", () => {
    cy.wait("@UserReposQuery")
      .get(`[data-testid="profile repo list heading"]`)
      .should("have.length", 0)
      .get(`[data-testid="pagination button previous"]`)
      .should("not.exist")
      .get(`[data-testid="pagination button next"]`)
      .should("not.exist");
  });

  it("should not display any repository when using the search bar", () => {
    cy.get("input#search")
      .type("sentry{enter}")
      .get(`[data-testid="repository list item"`)
      .should("have.length", 0);
  });

  it("should have working sort options, type, and language selection with no results", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@UserReposQuery")
      .wait("@UserProfileQuery")
      .get(`[data-testid="filters dropdown Type"]`)
      .click()
      .get(`[data-testid="repository list item"`)
      .should("not.exist")
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
      .get(`[data-testid="repository list item"`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown Language items"]`)
      .should("be.visible")
      .get(`[data-testid="filters dropdown item All"]`)
      .should("exist")
      .and("be.visible")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="repository list item"`)
      .should("not.exist")
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
});
