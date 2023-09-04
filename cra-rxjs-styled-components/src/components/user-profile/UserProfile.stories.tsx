import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfile from './UserProfile';
import { useArgs } from '@storybook/client-api';

export default {
	title: 'UserProfile',
	component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

export const Default: ComponentStory<typeof UserProfile> = (args) => {
	return <UserProfile />;
};
