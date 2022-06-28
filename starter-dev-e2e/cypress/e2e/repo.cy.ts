import { View } from "../utils/view";
import { InterceptResponse } from "../utils/intercept-response";

describe("When there is proper repository page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Repository, InterceptResponse.Full);
    cy.interceptRestCalls(View.Repository, InterceptResponse.Full);

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

  it("should be able to paginate forward and backwards on issues tab", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      )
      .get(`[data-testid="pagination button next"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Angular - NgRx - SCSS] Create single repo issues tab view"
      )
      .get(`[data-testid="pagination button next"]`)
      .should("be.disabled")
      .get(`[data-testid="pagination button previous"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      )
      .get(`[data-testid="pagination button next"]`)
      .should("be.enabled")
      .get(`[data-testid="pagination button previous"]`)
      .should("be.disabled");
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

  it("should be able to paginate forward and backwards on pull requests tab", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix: fix dist folder for angular ngrx")
      .get(`[data-testid="pagination button next"]`)
      .click()
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[Angular-Apollo-Tailwind] Run yarn generate in amplify deploy"
      )
      .get(`[data-testid="pagination button next"]`)
      .should("be.disabled")
      .get(`[data-testid="pagination button previous"]`)
      .click()
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix: fix dist folder for angular ngrx")
      .get(`[data-testid="pagination button next"]`)
      .should("be.enabled")
      .get(`[data-testid="pagination button previous"]`)
      .should("be.disabled");
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

  it("should be able to filter valid open issues list by label", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      )
      .get(`[data-testid="filters dropdown Label"]`)
      .click()
      .get(`[data-testid="filters dropdown item bug"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "0")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "7")
      .get(`[data-testid="issues-empty"]`)
      .should("be.visible")
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      );
  });

  it("should be able to filter valid closed issues list by label", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      )
      .get(`[data-testid="filters dropdown Label"]`)
      .click()
      .get(`[data-testid="filters dropdown item bug"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "0")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "7")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      )
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      );
  });

  it("should be able to filter valid open issues list by milestone", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      )
      .get(`[data-testid="filters dropdown Milestones"]`)
      .click()
      .get(`[data-testid="filters dropdown item Angular Apollo Tailwind"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "1")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "4")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Angular + Apollo + Tailwind] Closed angular-apollo-tailwind issue"
      )
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      );
  });

  it("should be able to filter valid closed issues list by milestone", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      )
      .get(`[data-testid="filters dropdown Milestones"]`)
      .click()
      .get(`[data-testid="filters dropdown item Angular Apollo Tailwind"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "1")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "4")
      .get(`[data-testid="issue title"]`)
      .should("contain.text", "[Angular + Apollo + Tailwind] Fix User Gists")
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      );
  });

  it("should be able to sort valid open issues list by oldest", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      )
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Oldest"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Angular - NgRx - SCSS] Create single repo readme view"
      )
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Cypress] Write test coverage for organization page"
      );
  });

  it("should be able to sort valid closed issues list by oldest", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      )
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Oldest"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "68")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "95")
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Angular + Apollo + Tailwind] Fix Tailwind Prod Bundle Size"
      )
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="issue title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Tab focus lost when not at root level of repo"
      );
  });

  it("should be able to filter valid open pull requests list by label", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "12")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "134")
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Update readme for local and deployment"
      )
      .get(`[data-testid="filters dropdown Label"]`)
      .click()
      .get(`[data-testid="filters dropdown item WIP DO NOT MERGE"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "1")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "0")
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[WIP] Vue3 ts quasar/feat/get profile info (#137)"
      )
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Update readme for local and deployment"
      );
  });

  it("should be able to filter valid closed issues list by label", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "12")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "134")
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix: fix dist folder for angular ngrx")
      .get(`[data-testid="filters dropdown Label"]`)
      .click()
      .get(`[data-testid="filters dropdown item WIP DO NOT MERGE"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "1")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "0")
      .get(`[data-testid="issues-empty"]`)
      .should("be.visible")
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix: fix dist folder for angular ngrx");
  });

  it("should be able to sort valid open pull requests list by oldest", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "12")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "134")
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Update readme for local and deployment"
      )
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Oldest"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "12")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "134")
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix environment variables and CORS issues")
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[Next + React Query + Tailwind] Update readme for local and deployment"
      );
  });

  it("should be able to filter valid closed issues list by oldest", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "12")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "134")
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix: fix dist folder for angular ngrx")
      .get(`[data-testid="filters dropdown Sort"]`)
      .click()
      .get(`[data-testid="filters dropdown item Oldest"]`)
      .click()
      .get(`[data-testid="openIssuesButton"]`)
      .should("contain.text", "12")
      .get(`[data-testid="closedIssuesButton"]`)
      .should("contain.text", "134")
      .get(`[data-testid="pull request title"]`)
      .should(
        "contain.text",
        "[Angular-Apollo-Tailwind] Resolve second level and beyond file tree rendering issues"
      )
      .get(`[data-testid="clear filters button"]`)
      .click()
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="pull request title"]`)
      .should("contain.text", "fix: fix dist folder for angular ngrx");
  });
});

describe("When there is proper empty repository page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Repository, InterceptResponse.Empty);
    cy.interceptRestCalls(View.Repository, InterceptResponse.Empty);

    cy.visit("/thisdot/starter.dev-github-showcases");
  });

  it("should display correct nav header names and empty information", () => {
    cy.wait("@CurrentUserQuery")
      .wait("@RepoPageQuery")
      .wait("@RepoTreeQuery")
      .get(`[data-testid="header owner name"]`)
      .should("contain.text", "thisdot")
      .get(`[data-testid="header repo name"]`)
      .should("contain.text", "starter.dev-github-showcases")
      .get(`[data-testid="repo watch count"]`)
      .should("contain.text", "0")
      .get(`[data-testid="repo star count"]`)
      .should("contain.text", "0")
      .get(`[data-testid="repo fork count"]`)
      .should("contain.text", "0")
      .get(`[data-testid="repo issues count"]`)
      .should("contain.text", "0")
      .get(`[data-testid="repo pull requests count"]`)
      .should("contain.text", "0")
      .get(`[data-testid="repo file explorer description"]`)
      .should("contain.text", "No description, website, or topics provided.")
      .get(`[data-testid="readme empty"]`)
      .should("be.visible");
  });

  it("should be able to navigate to issues and pull requests tabs", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery");
  });

  it("should see no open issues on issues tab", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="issues-empty"]`)
      .should("be.visible");
  });

  it("should see no closed issues on issues tab", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="issues-empty"]`)
      .should("be.visible");
  });

  it("should not be able to paginate forward and backwards on issues tab", () => {
    cy.get(`[data-testid="repo issues tab"]`)
      .click()
      .wait("@RepoIssuesQuery")
      .get(`[data-testid="pagination button next"]`)
      .should("not.exist")
      .get(`[data-testid="pagination button previous"]`)
      .should("not.exist");
  });

  it("should see no open pull requests on pull requests tab", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="issues-empty"]`)
      .should("be.visible");
  });

  it("should see no closed pull requests on pull requests tab", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="issues-empty"]`)
      .should("be.visible");
  });

  it("should not be able to paginate forward and backwards on pull requests tab", () => {
    cy.get(`[data-testid="repo pull requests tab"]`)
      .click()
      .wait("@RepoPullRequestsQuery")
      .get(`[data-testid="closedIssuesButton"]`)
      .click()
      .get(`[data-testid="pagination button next"]`)
      .should("not.exist")
      .get(`[data-testid="pagination button previous"]`)
      .should("not.exist");
  });
});
