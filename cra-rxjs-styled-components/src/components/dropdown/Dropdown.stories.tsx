import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Dropdown from './Dropdown';

export default {
  title: 'Navbar/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Dropdown />}></Route>
    </Routes>
  </MemoryRouter>
);

export const DefaultValue = Template.bind({});
DefaultValue.args = {};
