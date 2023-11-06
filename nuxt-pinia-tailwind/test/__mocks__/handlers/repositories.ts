import { rest } from 'msw';
import { IRepository } from '@/types/repository/interfaces';
import { repositoryMock } from '@/test/__mocks__/constants/repositoriesMocks';

export const repoMock = rest.get<IRepository>(
  'https://api.github.com/repos/test/test-repo',
  (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(repositoryMock));
  }
);

export default { repoMock };
