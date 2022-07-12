import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import RepoAbout from './RepoAbout';

export default {
  title: 'Repo/About',
  component: RepoAbout,
} as ComponentMeta<typeof RepoAbout>;

const Template: ComponentStory<typeof RepoAbout> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<RepoAbout {...args} />}></Route>
    </Routes>
  </MemoryRouter>
);

export const DefaultDescription = Template.bind({});
DefaultDescription.args = {
  description: 'No description, website, or topics provided.',
};

export const UserRepoDescription = Template.bind({});
UserRepoDescription.args = {
  description:
    'This is version 2 of my Black Excellence Music Project. This will have all new games, more artists and educational resources.',
};

export const HomePageUrl = Template.bind({});
HomePageUrl.args = {
  homepageUrl: 'https://black-excellence-music-project.netlify.app/',
};

export const Topics = Template.bind({});
Topics.args = {
  topics: ['react'],
};
