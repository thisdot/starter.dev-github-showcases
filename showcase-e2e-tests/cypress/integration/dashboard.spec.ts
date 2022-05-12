describe(`Sign in`, () => {
  describe(`My First Test`, () => {
    beforeEach(() => {
      cy.intercept(`POST`, `/graphql`, (req) => {
        if (req.body.operationName === `CurrentUser`) {
          req.alias = req.body.operationName;
          req.reply({
            fixture: `user/currentUser.graphql.json`,
          });
          return;
        }

        if (req.body.operationName === `UserTopRepos`) {
          req.alias = req.body.operationName;
          req.reply({
            fixture: `user/userTopRepos.graphql.json`,
          });
          return;
        }

        req.continue();
      });
    });

    it(`top repos should be listed`, () => {
      cy.get(`h2`).should(`be.visible`);
    });
  });
});
