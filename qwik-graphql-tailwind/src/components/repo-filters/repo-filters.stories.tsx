import { Meta } from '@storybook/html';
import { RepoFilters, RepoFiltersProps } from './repo-filters';

export default {
  title: 'Repo Filters',
} as Meta;

const Template = (args: RepoFiltersProps) => <RepoFilters {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  languages: [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'JavaScript',
      value: 'javascript',
    },
    {
      label: 'TypeScript',
      value: 'typescript',
    },
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'Python',
      value: 'python',
    },
    {
      label: 'PHP',
      value: 'php',
    },
    {
      label: 'Lua',
      value: 'lua',
    },
  ],
  resultCount: 100,
};
