import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Header from './Header';

export default {
	title: 'Navbar/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<Header />}></Route>
		</Routes>
	</MemoryRouter>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
