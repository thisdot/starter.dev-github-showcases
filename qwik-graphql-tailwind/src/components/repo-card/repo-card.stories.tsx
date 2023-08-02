import { component$ } from '@builder.io/qwik';
import { Meta } from '@storybook/html';
import { storybookMockRouting } from '../../utils';
import { RepoCard, RepoCardProps } from './repo-card';

const RepoCardDemoComponent = component$((args: RepoCardProps) => {
  storybookMockRouting();
  return <RepoCard {...args} />;
});

export default {
  title: 'Repo Card',
} as Meta;

const Template = (props: RepoCardProps) => <RepoCardDemoComponent {...props} />;

export const Demo: any = Template.bind({});

Demo.args = {
  repo: {
    name: 'qwik',
    description: 'Qwik is a framework for building web applications.',
    url: 'https://github.com/BuilderIO/qwik',
    stars: 100,
    forks: 10,
    language: 'TypeScript',
    languageColor: '#2b7489',
    updatedAt: '2019-01-17T23:41:24Z',
  },
};
