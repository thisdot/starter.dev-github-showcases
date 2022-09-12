import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import PullRequest from './pull-request/PullRequest.view';

export default {
	title: 'Repo/PullRequest',
	component: PullRequest,
} as ComponentMeta<typeof PullRequest>;

const Template: ComponentStory<typeof PullRequest> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<PullRequest {...args} />}></Route>
		</Routes>
	</MemoryRouter>
);
