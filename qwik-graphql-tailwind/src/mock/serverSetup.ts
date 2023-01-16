import { setupServer } from 'msw/node';
import { mockedUserReposQuery } from './mockedUserRepo';

const server = setupServer(mockedUserReposQuery);

export { server };
