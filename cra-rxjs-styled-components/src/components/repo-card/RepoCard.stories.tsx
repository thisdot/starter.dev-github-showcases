import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import RepoCard from './RepoCard';

export default {
	title: 'Repo/RepoCard',
	component: RepoCard,
} as ComponentMeta<typeof RepoCard>;

const Template: ComponentStory<typeof RepoCard> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<RepoCard {...args} />}></Route>
		</Routes>
	</MemoryRouter>
);

export const StarteDevRepo = Template.bind({});
StarteDevRepo.args = {
	repo: {
		id: 421063754,
		owner: { login: 'thisdot', type: 'Organization' },
		name: 'starter.dev',
		full_name: 'thisdot/starter.dev',
		private: false,
		html_url: 'https://github.com/thisdot/starter.dev',
		description: `starter.dev
		This is a monorepo for the starter.dev project.
		starter.dev is a collection of starter kit projects and related tools to help get you up and running on your next project without spending days adding all the pieces and configuration to supporting whatever libraries or frameworks that you choose. Choose a kit with the set of tools you are looking for and use our CLI to generate your new project. The starter kits come with all the essentials included and configured, such as TypeScript, testing, linting, storybook, and more.`,
		url: 'https://api.github.com/repos/thisdot/starter.dev',
		updated_at: new Date('2022-01-21T17:34:25Z'),
		language: 'TypeScript',
		homepage: '',
		forks_count: 0,
		open_issues_count: 0,
		visibility: 'public',
		stargazers_count: 8,
		branches_url:
			'https://api.github.com/repos/thisdot/starter.dev/branches{/branch}',
		pulls: 18,
		subscribers_count: 8,
		default_branch: 'main',
		fork: false,
		archived: false,
	},
};
