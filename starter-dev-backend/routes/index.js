import Router from 'express';
import graphql from './graphql';

const routes = Router();
routes.use('/graphql', graphql);

export default routes;
