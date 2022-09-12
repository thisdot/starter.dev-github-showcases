import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Issue from './Issue/Issue.view';

export default {
	title: 'Repo/Issue',
	component: Issue,
} as ComponentMeta<typeof Issue>;

const Template: ComponentStory<typeof Issue> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<Issue {...args} />}></Route>
		</Routes>
	</MemoryRouter>
);

const openDate = new Date().toISOString();
export const Issues = Template.bind({});
Issues.args = {
	changeActiveTab: () => null,
	issues: [
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 0,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 2,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 3,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'closed',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'closed',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: openDate,
			openedBy: 'by vyktoremario',
			status: 'closed',
			messageCount: 8,
		},
	],
};
