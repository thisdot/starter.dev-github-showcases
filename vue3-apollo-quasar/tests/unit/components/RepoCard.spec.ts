import { shallowMount } from '@vue/test-utils';
import { RepoCard } from '@/components';

const testData = {
  repoName: 'cowrywise-unsplashed',
  visibilityTag: 'Private',
  mainLanguage: {
    color: 'yellow',
    language: 'Javascript',
  },
  description:
    'Using basic pull requests to add your name and github link to BE A MEMBER of ZTM-ng',
  topics: [
    {
      name: 'JavaScript',
      url: '',
    },
    {
      name: 'css',
      url: '',
    },
    {
      name: 'graphql-api',
      url: '',
    },
  ],
  stars: 1,
  lastUpdated: 'on 23 Sep 2020',
};

jest.mock('@vue/apollo-composable', () => {
  return {
    useQuery: jest.fn(() => []),
    useResult: jest.fn(() => []),
  };
});

describe('RepoCard', () => {
  it('should mount', () => {
    const wrapper = shallowMount(RepoCard, {
      props: {
        ...testData,
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
