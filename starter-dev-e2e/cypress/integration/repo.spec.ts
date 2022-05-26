import { hasOperationName, aliasQuery } from "../utils/graphql-test-utils";

//TODO: this can be refactored, probably using an enum/json structure to check against
function handleGqlRequest(req): Boolean {
  if (hasOperationName(req, "CurrentUser")) {
    aliasQuery(req, "CurrentUser");
    req.reply({
      fixture: "user/currentUser.graphql.json",
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

  if (hasOperationName(req, "RepoIssues")) {
    aliasQuery(req, "RepoIssues");
    req.reply({
      fixture: "repo/repoIssues.graphql.json",
    });
    return true;
  }

  if (hasOperationName(req, "RepoPullRequests")) {
    aliasQuery(req, "RepoPullRequests");
    req.reply({
      fixture: "repo/repoPullRequests.graphql.json",
    });
    return true;
  }

  return false;
}

describe("Repository Page Tests", () => {
  beforeEach(() => {
    cy.intercept("POST", "/graphql", (req) => {
      if (handleGqlRequest(req)) {
        return;
      }

      req.continue();
    });

    cy.visit("/thisdot/starter.dev-github-showcases");
  });
  it("should display correct nav header names", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlRepoPageQuery")
      .wait("@gqlRepoTreeQuery")
      .wait("@gqlRepoReadMeQuery")
      .get(`[data-testid="header owner name"]`)
      .contains("thisdot")
      .get(`[data-testid="header repo name"]`)
      .contains("starter.dev-github-showcases")
      .get(`[data-testid="repo watch count"]`)
      .contains("14")
      .get(`[data-testid="repo star count"]`)
      .contains("30")
      .get(`[data-testid="repo fork count"]`)
      .contains("5")
      .get(`[data-testid="repo issues count"]`)
      .contains("68")
      .get(`[data-testid="repo pull requests count"]`)
      .contains("12")
      //.get(`[data-testid="about description"]`) // Bug currently on angular-apollo, not set correctly
      //.contains("A collection of GitHub clone implementations.")
      .get(`[data-testid="readme"]`)
      .should("be.visible");
  });

  it("should be able to navigate to issues and pull requests tabs", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      //.should("have.class", "tabActive") // fails on next-react because classes aren't space separated
      .wait("@gqlRepoIssuesQuery")
      .get(`[data-testid="repo pull requests tab"]`)
      .click()
      //.should("have.class", "tabActive")
      .wait("@gqlRepoPullRequestsQuery");
  });

  it("should be able to navigate down and up four folders deep", () => {
    cy.get(`[data-testid="repo issues tab"]`).click();
  });
});
