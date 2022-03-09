const routes = require('express').Router();
//const { graphqlHTTP } = require('express-graphql');
const graphql = require('./graphql');

routes.use('/graphql', graphql);

module.exports = routes;
