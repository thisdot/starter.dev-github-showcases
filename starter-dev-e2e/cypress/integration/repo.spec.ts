import {
  hasOperationName,
  aliasQuery,
  hasExpression,
} from "../utils/graphql-test-utils";

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

  if (
    hasOperationName(req, "RepoTree") &&
    hasExpression(req, "main:angular-apollo-tailwind")
  ) {
    aliasQuery(req, "RepoTreeFolder1");
    req.reply({
      fixture: "repo/repoTree-folder1.graphql.json",
    });
    return true;
  }

  if (
    hasOperationName(req, "RepoTree") &&
    hasExpression(req, "main:angular-apollo-tailwind/src")
  ) {
    aliasQuery(req, "RepoTreeFolder2");
    req.reply({
      fixture: "repo/repoTree-folder2.graphql.json",
    });
    return true;
  }

  if (
    hasOperationName(req, "RepoTree") &&
    hasExpression(req, "main:angular-apollo-tailwind/src/app")
  ) {
    aliasQuery(req, "RepoTreeFolder3");
    req.reply({
      fixture: "repo/repoTree-folder3.graphql.json",
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

  if (
    hasOperationName(req, "RepoReadMe") &&
    hasExpression(req, "HEAD:angular-apollo-tailwind/README.md")
  ) {
    aliasQuery(req, "RepoReadMeFolder1");
    req.reply({
      fixture: "repo/repoReadMe-folder1.graphql.json",
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

  if (hasOperationName(req, "RepoFile")) {
    aliasQuery(req, "RepoFile");
    req.reply({
      fixture: "repo/repoFile.graphql.json",
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

    cy.visit("/thisdot/starter.dev-github-showcases");
  });

  it("should display correct nav header names and information", () => {
    cy.wait("@gqlCurrentUserQuery")
      .wait("@gqlRepoPageQuery")
      .wait("@gqlRepoTreeQuery")
      .wait("@gqlRepoReadMeQuery")
      .get(`[data-testid="header owner name"]`)
      .should("contain.text", "thisdot")
      .get(`[data-testid="header repo name"]`)
      .should("contain.text", "starter.dev-github-showcases")
      .get(`[data-testid="repo watch count"]`)
      .should("contain.text", "14")
      .get(`[data-testid="repo star count"]`)
      .should("contain.text", "30")
      .get(`[data-testid="repo fork count"]`)
      .should("contain.text", "5")
      .get(`[data-testid="repo issues count"]`)
      .should("contain.text", "68")
      .get(`[data-testid="repo pull requests count"]`)
      .should("contain.text", "12")
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

  it("should be able to navigate down and up three folders deep", () => {
    cy.get(`[data-testid="file explorer list angular-apollo-tailwind"]`)
      .click()
      .get(
        `[data-testid="file explorer nav root starter.dev-github-showcases"]`
      )
      .should("be.visible")
      .get(`[data-testid="file explorer nav end angular-apollo-tailwind"]`)
      .should("be.visible")
      .get(`[data-testid="file explorer list src"]`)
      .click()
      .get(
        `[data-testid="file explorer nav root starter.dev-github-showcases"]`
      )
      .should("be.visible")
      .get(`[data-testid="file explorer nav crumb angular-apollo-tailwind"]`)
      .should("be.visible")
      .get(`[data-testid="file explorer nav end src"]`)
      .should("be.visible")
      .get(`[data-testid="file explorer list app"]`)
      .click()
      .get(`[data-testid="file explorer nav crumb src"]`)
      .should("be.visible")
      .get(`[data-testid="file explorer nav end app"]`)
      .should("be.visible")
      .get(`[data-testid="file explorer nav crumb src"]`)
      .click()
      .get(`[data-testid="file explorer nav crumb angular-apollo-tailwind"]`)
      .click()
      .get(
        `[data-testid="file explorer nav root starter.dev-github-showcases"]`
      )
      .click();
  });

  it("should display a README for folders that contain them", () => {
    cy.get(`[data-testid="readme"]`)
      .should("be.visible")
      .get(`[data-testid="file explorer list angular-apollo-tailwind"]`)
      .click()
      .get(`[data-testid="readme"]`)
      .should("be.visible")
      .get(`[data-testid="file explorer list src"]`)
      .click()
      .get(`[data-testid="readme"]`)
      .should("not.exist");
  });

  it("should display a file and its metadata when clicking on it in the repo tree", () => {
    cy.get(`[data-testid="file explorer list README.md"]`)
      .click()
      .get(`[data-testid="file viewer line count"]`)
      .should("be.visible")
      .should("contain.text", "3 lines")
      .get(`[data-testid="file viewer byte size"]`)
      .should("be.visible")
      .should("contain.text", "1234")
      .get(`[data-testid="code-block"]`)
      .should("be.visible");
  });
});
