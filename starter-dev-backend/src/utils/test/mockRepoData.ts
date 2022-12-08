import { Repo } from 'types/graphql';

export const createMockRepoData: Repo = {
  __typename: 'Repo',
  description: 'test',
  forks_count: 0,
  full_name: 'WillHutt/starwars-api',
  id: '567482388',
  language: 'JavaScript',
  name: 'starwars-api',
  owner: {
    __typename: 'User',
    login: 'WillHutt',
  },
  private: false,
  stargazers_count: 0,
  title: 'test',
  updated_at: '2022-11-17T22:18:18Z',
};
