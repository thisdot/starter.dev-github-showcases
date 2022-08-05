import { View } from "../utils/view";
import { InterceptResponse } from "../utils/intercept-response";

describe("When there is proper repository page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Organization, InterceptResponse.Full);

    cy.visit("/orgs/thisdot");
  });

  it("should display correct organization name and avatar", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="org about name"]`)
      .should("be.visible")
      .and("contain.text", "This Dot")
      .get(`[data-testid="org about avatar"]`)
      .should("be.visible")
      .and("have.attr", "src")
      .and(
        "match",
        /.*(https).*(avatars\.githubusercontent\.com).*(22839396).*/
      );
  });

  it("should display repository list and data", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="repository list item"]`)
      .should("have.length", "10")
      .and("be.visible")
      .get(`[data-testid="repository name"]`)
      .should("be.visible")
      .and("contain.text", "starter.dev")
      .get(`[data-testid="repository name"]`)
      .should("be.visible")
      .and("contain.text", "starter.dev")
      .get(`[data-testid="repository description"]`)
      .should("be.visible")
      .and("contain.text", "A test description for starter.dev")
      .get(`[data-testid="repository language"]`)
      .should("be.visible")
      .and("contain.text", "TypeScript")
      .get(`[data-testid="repository star count"]`)
      .should("be.visible")
      .and("contain.text", "123")
      .get(`[data-testid="repository fork count"]`)
      .should("be.visible")
      .and("contain.text", "456");
  });

  it("should be able to search for and see valid repositories", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="repository filters search input"]`)
      .type("starter.dev")
      .get(`[data-testid="repository list item"]`)
      .should("have.length", "2")
      .and("be.visible");
  });

  it("should be able to search an invalid repository and see no results", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="repository filters search input"]`)
      .type("not a valid repository")
      .get(`[data-testid="repository list item"]`)
      .should("not.exist");
  });

  it("should be populate filter dropdown buttons and menu with correct items", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="filters dropdown Type items"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown Language items"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown Sort items"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown Type"]`)
      .click()
      .get(`[data-testid="filters dropdown Type items"]`)
      .should("be.visible")
      .get(`[data-testid="filters dropdown item All"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "All")
      .get(`[data-testid="filters dropdown item Forks"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Forks")
      .get(`[data-testid="filters dropdown item Archived"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Archived")
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown Language items"]`)
      .should("be.visible")
      .get(`[data-testid="filters dropdown item All"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "All")
      .get(`[data-testid="filters dropdown item TypeScript"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "TypeScript")
      .get(`[data-testid="filters dropdown item JavaScript"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "JavaScript")
      .get(`[data-testid="filters dropdown item Python"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Python")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown Sort items"]`)
      .should("be.visible")
      .get(`[data-testid="filters dropdown item Last updated"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Last updated")
      .get(`[data-testid="filters dropdown item Name"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Name")
      .get(`[data-testid="filters dropdown item Stars"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Stars");
  });

  it("should be able to filter valid repos by type", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "starter.dev")
      .get(`[data-testid="filters dropdown Type"]`)
      .click()
      .get(`[data-testid="filters dropdown item Forks"]`)
      .click()
      .get(`[data-testid="filterText"]`)
      .should("contain.text", "2")
      .get(`[data-testid="repository name"]`)
      .should("have.length", 2)
      .and("contain.text", "sentry")
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
      .should("contain.text", "starter.dev");
  });

  it("should be able to filter valid repos by language", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "starter.dev")
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
      .should("contain.text", "6")
      .get(`[data-testid="repository name"]`)
      .should("have.length", 6)
      .and("contain.text", "starter.dev")
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown item All"]`)
      .click()
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown item JavaScript"]`)
      .click()
      .get(`[data-testid="filterText"]`)
      .should("contain.text", "2")
      .get(`[data-testid="repository name"]`)
      .should("have.length", 2)
      .and("contain.text", "node-enterprise-setup-shell")
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "starter.dev");
  });

  it("should be able to sort valid repos", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "starter.dev")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Name"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .and("contain.text", "tech-community-slacks")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Stars"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "starter.dev-github-showcases")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Last updated"]`)
      .click()
      .get(`[data-testid="repository name"]`)
      .should("contain.text", "starter.dev");
  });
});

describe("When there is proper empty organization page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Organization, InterceptResponse.Empty);

    cy.visit("/orgs/thisdot");
  });

  it("should display correct organization name and avatar", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="org about name"]`)
      .should("be.visible")
      .and("contain.text", "This Dot")
      .get(`[data-testid="org about avatar"]`)
      .should("be.visible")
      .and("have.attr", "src")
      .and(
        "match",
        /.*(https).*(avatars\.githubusercontent\.com).*(22839396).*/
      );
  });

  it("should display repository list and empty data", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="repository list item"]`)
      .should("not.exist")
      .get(`[data-testid="repository name"]`)
      .should("not.exist")
      .get(`[data-testid="repository description"]`)
      .should("not.exist")
      .get(`[data-testid="repository language"]`)
      .should("not.exist")
      .get(`[data-testid="repository star count"]`)
      .should("not.exist")
      .get(`[data-testid="repository fork count"]`)
      .should("not.exist");
  });

  it("should have no results when searching for a repository", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .get(`[data-testid="repository filters search input"]`)
      .type("starter.dev")
      .get(`[data-testid="repository list item"]`)
      .should("not.exist")
      .get(`[data-testid="filterText"]`)
      .should("be.visible")
      .and("contain", 0);
  });

  it("should have working filter dropdown buttons and menu with no populated data after selection", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@OrgReposQuery")
      .wait("@OrgProfileQuery")
      .get(`[data-testid="filters dropdown Type items"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown Language items"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown Sort items"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown Type"]`)
      .click()
      .get(`[data-testid="filters dropdown Type items"]`)
      .should("be.visible")
      .get(`[data-testid="repository list item"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown item All"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "All")
      .get(`[data-testid="filters dropdown item Forks"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Forks")
      .get(`[data-testid="filters dropdown item Archived"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Archived")
      .get(`[data-testid="filters dropdown Language"]`)
      .click()
      .get(`[data-testid="filters dropdown Language items"]`)
      .should("be.visible")
      .get(`[data-testid="repository list item"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown item All"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "All")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown Sort items"]`)
      .should("be.visible")
      .get(`[data-testid="repository list item"]`)
      .should("not.exist")
      .get(`[data-testid="filters dropdown item Last updated"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Last updated")
      .get(`[data-testid="filters dropdown item Name"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Name")
      .get(`[data-testid="filters dropdown item Stars"]`)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Stars");
  });
});
