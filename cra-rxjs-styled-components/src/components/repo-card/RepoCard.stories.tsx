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


// {
// 	id: number;
// 	name: string;
// 	full_name: string;
// 	owner: { login: string; type: RepositoryOwnerType };
// 	description: string;
// 	private: boolean;
// 	html_url: string;
// 	url: string;
// 	updated_at: Date;
// 	stargazers_count: number;
// 	language: string;
// 	branches_url: string;
// 	visibility: 'public' | 'private';
// 	subscribers_count: number;
// 	forks_count: number;
// 	open_issues_count: number;
// 	pulls: number;
// 	default_branch: string;
// 	homepage: string;
// }

export const StarteDevReadme = Template.bind({});
StarteDevReadme.args = {
	repo: {
		owner: { login: 'thisdot', type: 'Organization' },
		name: 'starter.dev',
	},
};
