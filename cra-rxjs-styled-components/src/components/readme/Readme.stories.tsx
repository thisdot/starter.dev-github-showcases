import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Readme from './Readme';

export default {
	title: 'Repo/Readme',
	component: Readme,
} as ComponentMeta<typeof Readme>;

const Template: ComponentStory<typeof Readme> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<Readme {...args} />}></Route>
		</Routes>
	</MemoryRouter>
);

export const StarteDevReadme = Template.bind({});
StarteDevReadme.args = {
	branch: 'main',
	repository: 'starter.dev',
	username: 'thisdot',
};
