import { Meta } from '@storybook/html';
import { RepoMeta, RepoMetaProps } from './repo-meta';

export default {
  title: 'Repo Meta Tag',
} as Meta;

const Template = (args: RepoMetaProps) => <RepoMeta {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  language: 'TypeScript',
  languageColor: '#2b7489',
  stargazerCount: 2,
  forkCount: 54,
  updatedAt: new Date(),
};
