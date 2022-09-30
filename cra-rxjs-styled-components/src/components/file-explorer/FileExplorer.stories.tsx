import FileExplorer from './FileExplorer';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

export default {
  title: 'Repo/FileExplorer',
  component: FileExplorer,
} as ComponentMeta<typeof FileExplorer>;

const Template: ComponentStory<typeof FileExplorer> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<FileExplorer {...args} />}></Route>
    </Routes>
  </MemoryRouter>
);

export const RootDirectory = Template.bind({});
RootDirectory.args = {
  branch: 'main',
  path: '',
  files: [
    {
      name: 'README.md',
      path: 'README.md',
    },
    {
      name: 'package.json',
      path: 'package.json',
    },
    {
      name: 'CONTRIBUTING.md',
      path: 'CONTRIBUTING.md',
    },
  ],
  directories: [
    {
      name: 'src',
      path: 'src',
    },
    {
      name: 'public',
      path: 'public',
    },
    {
      name: '.storybook',
      path: '.storybook',
    },
  ],
  basePath: '/thisdot/starter.dev-github-showcases',
};

export const SrcDirectory = Template.bind({});
SrcDirectory.args = {
  branch: 'main',
  path: 'src',
  files: [
    {
      name: 'App.tsx',
      path: 'App.tsx',
    },
    {
      name: 'Index.tsx',
      path: 'Index.tsx',
    },
    {
      name: 'tsconfig.json',
      path: 'tsconfig.json',
    },
  ],
  directories: [
    {
      name: 'components',
      path: 'components',
    },
    {
      name: 'routes',
      path: 'routes',
    },
    {
      name: 'pages',
      path: 'pages',
    },
    {
      name: 'styles',
      path: 'styles',
    },
  ],
  basePath: '/thisdot/starter.dev-github-showcases',
};
