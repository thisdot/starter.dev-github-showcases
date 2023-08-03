import { UserContext, UserProvider } from '../../context/UserProvider';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { Observable } from 'rxjs';

const user: any = {
	login: 'johndoe',
	avatar_url: 'https://avatars.githubusercontent.com/u/1234567?v=4',
	organizations: [
		{
			login: 'org1',
			avatar_url: 'https://avatars.githubusercontent.com/u/1234567?v=4',
		},
		{
			login: 'org2',
			avatar_url: 'https://avatars.githubusercontent.com/u/1234567?v=4',
		},
	],
	starredRepos: 5,
};

type ILoadUser = () => Observable<[any, any, any]>;

const loadUser: ILoadUser = () => user;
const loading: boolean = false;

export default {
	title: 'Navbar/Header',
	component: Header,
	decorators: [
		(Story) => (
			<UserProvider>
				<UserContext.Provider value={{ user, loading, loadUser }}>
					<Story />
				</UserContext.Provider>
			</UserProvider>
		),
	],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<Header />}></Route>
		</Routes>
	</MemoryRouter>
);

export const Default = Template.bind({});
