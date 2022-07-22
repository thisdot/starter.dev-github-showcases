import { View } from "../utils/view";
import { InterceptResponse } from "../utils/intercept-response";

describe("When there is proper dashboard page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Dashboard, InterceptResponse.Full);
    cy.interceptRestCalls(View.Dashboard, InterceptResponse.Full);
    cy.visit("/");
  });

  it("should display list of gists", () => {
    cy.get(`[data-testid="show gists list"]`)
      .should("be.visible")
      .wait("@CurrentUserQuery")
      .wait("@UserGistsQuery")
      .get(`[data-testid="user gist list item gist example 1"]`)
      .should("be.visible")
      .and("have.attr", "href")
      .then((href) => {
        expect(href).to.match(/https:\/\/gist\.github\.com/);
      });
  });

  it("top repos should be listed with valid repo links", () => {
    cy.wait("@UserTopReposQuery")
      .get(`[data-testid="show repo list"]`)
      .should(`be.visible`)
      .get(
        `[data-testid="user top repos starter.dev-github-showcases list item"]`
      )
      .should("contain.text", "starter.dev-github-showcases")
      .get(`[data-testid="user top repos starter.dev-github-showcases link"]`)
      .click()
      .wait("@RepoPageQuery")
      .wait("@RepoTreeQuery")
      .wait("@RepoReadMeQuery")
      .url()
      .should("include", "/thisdot/starter.dev-github-showcases")
      .get(`[data-testid="readme"]`)
      .should("be.visible");
  });

  it("should be able to see user's avatar in header", () => {
    cy.get(`[data-testid="user avatar header"]`)
      .should(`be.visible`)
      .and("have.attr", "src")
      .and(
        "match",
        /.*(https).*(avatars\.githubusercontent\.com).*(22839396).*/
      );
  });
});

describe("When there is proper empty dashboard page responses", () => {
  beforeEach(() => {
    cy.interceptGraphQLCalls(View.Dashboard, InterceptResponse.Empty);
    cy.interceptRestCalls(View.Dashboard, InterceptResponse.Empty);
    cy.visit("/");
  });

  it("should display empty list of gists", () => {
    cy.get(`[data-testid="empty gist list"]`).should(
      "contain.text",
      "User does not have any gists"
    );
  });

  it("top repos should not be listed", () => {
    cy.get(
      `[data-testid="user top repos starter.dev-github-showcases list item"]`
    ).should("not.exist");
  });

  it("should be able to see user's avatar in header", () => {
    cy.get(`[data-testid="user avatar header"]`)
      .should(`be.visible`)
      .and("have.attr", "src")
      .and(
        "match",
        /.*(https).*(avatars\.githubusercontent\.com).*(22839396).*/
      );
  });
});
