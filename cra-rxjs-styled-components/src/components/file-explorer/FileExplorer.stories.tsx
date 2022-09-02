import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import FileExplorer from './FileExplorer';

export default {
  title: 'Navbar/Header',
  component: FileExplorer,
} as ComponentMeta<typeof FileExplorer>;

const Template: ComponentStory<typeof FileExplorer> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<FileExplorer {...args} />}></Route>
    </Routes>
  </MemoryRouter>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {};

/**
 * branch: string;
  path: string;
  basePath: string;
  directories: FileItem[];
  files: FileItem[];
 */
