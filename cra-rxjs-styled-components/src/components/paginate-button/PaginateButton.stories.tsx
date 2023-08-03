import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import PaginateButton from './PaginateButton';

export default {
	title: 'Repo/PaginateButton',
	component: PaginateButton,
} as ComponentMeta<typeof PaginateButton>;

const Template: ComponentStory<typeof PaginateButton> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<PaginateButton {...args} />}></Route>
		</Routes>
	</MemoryRouter>
);

export const PaginatePrevButton = Template.bind({});
PaginatePrevButton.args = {
	onClick() {},
	disabled: false,
	children: (
		<>
			<span className="arrow prev">Prev</span>
		</>
	),
};

export const PaginateNextButton = Template.bind({});
PaginateNextButton.args = {
	onClick() {},
	disabled: false,
	children: (
		<>
			<span className="arrow next">Next</span>
		</>
	),
};
