import { UserContext, IUserContext } from '../../context/UserProvider';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { useParameter } from '@storybook/addons';

// const HeaderDecorator = (storyFn: () => React.ReactNode) => {
// 	const user = useParameter<IUserContext>('user');
// 	return <UserContext.Provider value={user}>{storyFn()}</UserContext.Provider>;
// };

export default {
	title: 'Navbar/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
	<MemoryRouter>
		<Routes>
			<Route
				path="/"
				element={
					<UserContext.Provider value={args.value}>
						<Header />
					</UserContext.Provider>
				}
			></Route>
		</Routes>
	</MemoryRouter>
);

export const Default = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {
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
	},
};
