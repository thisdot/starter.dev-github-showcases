import type { ComponentProps } from 'svelte';
import ProfileAboutSection from './ProfileAboutSection.svelte';

import { remapPublicProfileInformation, remapOrganizationSimple } from '$lib/helpers';
import { MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION } from '$lib/helpers/mocks/users';
import { MOCK_ORGANIZATION_SIMPLE_ARRAY } from '$lib/helpers/mocks/organizations';

type ProfileAboutSectionProps = ComponentProps<ProfileAboutSection>;

export default {
  component: ProfileAboutSection,
  title: 'components/ProfileAboutSection',
};

const Template = (props: ProfileAboutSectionProps) => ({
  Component: ProfileAboutSection,
  props,
});

const storyProps = {
  profile: remapPublicProfileInformation(MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION),
  organizations: MOCK_ORGANIZATION_SIMPLE_ARRAY.map(remapOrganizationSimple),
};

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Default.args = storyProps;
