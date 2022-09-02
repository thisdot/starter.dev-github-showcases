import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import FileViewer from './FileViewer.view';

export default {
  title: 'Navbar/FileViewer',
  component: FileViewer,
} as ComponentMeta<typeof FileViewer>;

const Template: ComponentStory<typeof FileViewer> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<FileViewer />}></Route>
    </Routes>
  </MemoryRouter>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
