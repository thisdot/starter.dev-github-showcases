import { View } from "../utils/view";

describe("When there is proper repository page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Repository);
    cy.interceptRestCalls(View.Repository);

    cy.visit("/thisdot/starter.dev-github-showcases");
  });

  it("should display correct nav header names and information", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@RepoPageQuery")
      .wait("@RepoTreeQuery")
      .wait("@RepoReadMeQuery")
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
      .get(`[data-testid="repo file explorer description"]`)
      .should("contain.text", "A collection of GitHub clone implementations.")
      .get(`[data-testid="readme"]`)
      .should("be.visible");
  });

  it("should be able to navigate to issues and pull requests tabs", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="repo issues"]`)
      .should("be.visible")
      .get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="repo pull requests"]`)
      .should("be.visible");
  });

  it("should be able to see open issues with valid data", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="issue"]`)
      .should("have.length", "24")
      .should("be.visible")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      )
      .get(`[data-testid="issue label name"]`)
      .should("not.exist")
      .get(`[data-testid="issue number"]`)
      .should("contain.text", "#308")
      .get(`[data-testid="issue created at"]`)
      .should("be.visible")
      .get(`[data-testid="issue created by"]`)
      .should("contain.text", "BrettZeidler")
      .get(`[data-testid="issue comment count"]`)
      .should("contain.text", "32");
  });

  it("should be able to see closed issues with valid data", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="issue"]`)
      .should("have.length", "25")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      )
      .get(`[data-testid="issue label name"]`)
      .should("contain.text", "bug")
      .get(`[data-testid="issue number"]`)
      .should("contain.text", "#292")
      .get(`[data-testid="issue closed at"]`)
      .should("be.visible")
      .get(`[data-testid="issue created by"]`)
      .should("contain.text", "vyktoremario")
      .get(`[data-testid="issue comment count"]`)
      .should("contain.text", "0");
  });

  it("should be able to see open pull requests with valid data", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="pr"]`)
      .should("have.length", "12")
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Update readme for local and deployment"
      )
      .get(`[data-testid="pull request label name"]`)
      .should("contain.text", "WIP DO NOT MERGE")
      .get(`[data-testid="pull request number"]`)
      .should("contain.text", "#304")
      .get(`[data-testid="pull request created at"]`)
      .should("be.visible")
      .get(`[data-testid="pull request created by"]`)
      .should("contain.text", "iansamz")
      .get(`[data-testid="pull request comment count"]`)
      .should("contain.text", "12");
  });

  it("should be able to see closed pull requests with valid data", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="pr"]`)
      .should("have.length", "25")
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix: fix dist folder for angular ngrx")
      .get(`[data-testid="pull request label name"]`)
      .should("not.exist")
      .get(`[data-testid="pull request number"]`)
      .should("contain.text", "#312")
      .get(`[data-testid="pull request closed at"]`)
      .should("be.visible")
      .get(`[data-testid="pull request created by"]`)
      .should("contain.text", "lindakatcodes")
      .get(`[data-testid="pull request comment count"]`)
      .should("contain.text", "0");
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
