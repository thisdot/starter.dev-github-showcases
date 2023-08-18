import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import PullRequest from './pull-request/PullRequest.view';
import { RepoProvider } from '../../context/RepoContext';

export default {
	title: 'Repo/PullRequest',
	component: PullRequest,
	decorators: [
		(Story) => (
			<RepoProvider
				value={{
					owner: '',
					name: '',
					branch: '',
					basePath: '',
					path: '',
					isRepoLoading: false,
				}}
			>
				<Story />
			</RepoProvider>
		),
	],
} as ComponentMeta<typeof PullRequest>;

const Template: ComponentStory<typeof PullRequest> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<PullRequest {...args} />}></Route>
		</Routes>
	</MemoryRouter>
);

const date = new Date().toISOString();
export const OpenPullRequests = Template.bind({});
OpenPullRequests.args = {
	openPRCount: 3,
	closedPRCount: 0,
	pullRequests: [
		{
			title: 'fix: Angular Apollo Tailwind - improve codegen',
			number: '1',
			created_at: date,
			user: { login: 'krtz' },
			state: 'open',
			messageCount: 0,
			merged_at: null,
			repository_url: '/',
			comments: '',
			labels: [{ name: 'dependency', color: '633bcc' }],
		},
		{
			title: '[Nuxt - Pinia - Tailwind] Get PRs comments',
			number: '2',
			created_at: date,
			user: { login: 'jesus4497' },
			state: 'open',
			messageCount: 0,
			merged_at: null,
			repository_url: '/',
			comments: '',
			labels: [],
		},
		{
			title: '[CRA-RXJS-SC] Fix PR API fetch',
			number: '3',
			created_at: date,
			user: { login: 'kodejuice' },
			state: 'open',
			messageCount: 0,
			merged_at: null,
			repository_url: '/',
			comments: '',
			labels: [],
		},
	],
};

export const MergedPullRequests = Template.bind({});
MergedPullRequests.args = {
	openPRCount: 0,
	closedPRCount: 2,
	pullRequests: [
		{
			title:
				'[Angular-Apollo-Tailwind] fix: Angular Apollo Tailwind - improve config',
			number: '1',
			created_at: date,
			user: { login: 'krtz' },
			state: 'closed',
			messageCount: 0,
			isMerged: true,
			merged_at: date,
			repository_url: '/',
			comments: '',
			labels: [],
		},
		{
			title: '[Angular-NgRx-SCSS] Click Away Directive',
			number: '2',
			created_at: date,
			user: { login: 'Amdrel' },
			state: 'closed',
			messageCount: 0,
			isMerged: true,
			merged_at: date,
			repository_url: '/',
			comments: '',
			labels: [],
		},
	],
};

export const ClosedPullRequests = Template.bind({});
ClosedPullRequests.args = {
	openPRCount: 0,
	closedPRCount: 2,
	pullRequests: [
		{
			title: 'Feature/restructure component',
			number: '1',
			created_at: date,
			user: { login: 'tyrelchambers' },
			state: 'closed',
			messageCount: 0,
			merged_at: null,
			repository_url: '/',
			comments: '',
			labels: [],
		},
		{
			title: '[remix-gql-tailwind] Feature/restructure components',
			number: '2',
			created_at: date,
			user: { login: 'sheerikie' },
			state: 'closed',
			messageCount: 0,
			merged_at: null,
			repository_url: '/',
			comments: '',
			labels: [],
		},
	],
};
