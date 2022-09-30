import Dropdown from './Dropdown';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

export default {
  title: 'Navbar/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333' },
      ]
    }
  }
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
