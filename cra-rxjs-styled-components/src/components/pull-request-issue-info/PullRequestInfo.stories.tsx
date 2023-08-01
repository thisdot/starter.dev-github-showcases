import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import PullRequestIssueInfo from './PullRequestIssueInfo';

export default {
	title: 'Repo/PullRequestIssueInfo',
	component: PullRequestIssueInfo,
} as ComponentMeta<typeof PullRequestIssueInfo>;

const Template: ComponentStory<typeof PullRequestIssueInfo> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<PullRequestIssueInfo {...args} />}></Route>
		</Routes>
	</MemoryRouter>
);

const date = new Date().toString();
export const OpenPullRequestInfo = Template.bind({});
OpenPullRequestInfo.args = {
	title: 'fix: Angular Apollo Tailwind - improve codegen',
	number: '1',
	created_at: date,
	state: 'open',
	openedBy: 'krtz',
};

export const ClosedPullRequestInfo = Template.bind({});
ClosedPullRequestInfo.args = {
	title: '[remix-gql-tailwind] Feature/restructure components',
	number: '1',
	created_at: date,
	state: 'closed',
	openedBy: 'sheerikie',
};
