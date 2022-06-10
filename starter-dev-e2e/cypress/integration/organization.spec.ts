import {
  hasOperationName,
  aliasQuery,
  hasExpression,
} from "../utils/graphql-test-utils";

function handleGqlRequest(req): Boolean {
  if (hasOperationName(req, "UserTopRepos")) {
    aliasQuery(req, "UserTopRepos");
    req.reply({
      fixture: "user/userTopRepos.graphql.json",
    });
    return true;
  }

  if (hasOperationName(req, "UserGists")) {
    aliasQuery(req, "UserGists");
    req.reply({
      fixture: "user/userGist.graphql.json",
    });
    return true;
  }

  if (hasOperationName(req, "CurrentUser")) {
    aliasQuery(req, "CurrentUser");
    req.reply({
      fixture: "user/currentUser.graphql.json",
    });
    return true;
  }

  if (hasOperationName(req, "OrgRepos")) {
    aliasQuery(req, "OrgRepos");
    req.reply({
      fixture: "org/orgRepos.graphql.json",
    });
    return true;
  }

  if (hasOperationName(req, "OrgProfile")) {
    aliasQuery(req, "OrgProfile");
    req.reply({
      fixture: "org/orgProfile.graphql.json",
    });
    return true;
  }

  return false;
}

describe("When there is proper repository page responses", () => {
  beforeEach(() => {
    cy.intercept("POST", "/graphql", (req) => {
      if (handleGqlRequest(req)) {
        return;
      }

      req.continue();
    });

    cy.visit("/orgs/thisdot");
  });

  it("should display correct organization name and avatar", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlOrgReposQuery")
      .wait("@gqlOrgProfileQuery")
      .get(`[data-testid="org about name"]`)
      .should("be.visible")
      .and("contain.text", "This Dot")
      .get(`[data-testid="org about avatar"]`)
      .should("be.visible")
      .and("have.attr", "src")
      .and("contain", "22839396");
  });

  it("should display repository list and data", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlOrgReposQuery")
      .wait("@gqlOrgProfileQuery")
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
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlOrgReposQuery")
      .wait("@gqlOrgProfileQuery")
      .get(`[data-testid="repository filters search input"]`)
      .type("starter.dev")
      .get(`[data-testid="repository list item"]`)
      .should("have.length", "2")
      .and("be.visible");
  });

  it("should be able to search an invalid repository and see no results", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlOrgReposQuery")
      .wait("@gqlOrgProfileQuery")
      .get(`[data-testid="repository filters search input"]`)
      .type("not a valid repository")
      .get(`[data-testid="repository list item"]`)
      .should("not.exist");
  });

  it("should be populate filter dropdown buttons and menu with correct items", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlOrgReposQuery")
      .wait("@gqlOrgProfileQuery")
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
});
