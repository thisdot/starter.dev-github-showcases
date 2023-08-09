import type { StoryFn, Meta } from '@storybook/react';
import TabNavigation from './TabNavigation';
import { createWrapper } from '@lib/testUtils';
import {
  UserIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

export default {
  component: TabNavigation,
  title: 'Components/TabNavigation',
  decorators: [
    (Story: StoryFn) => {
      const Wrapper = createWrapper();
      return (
        <Wrapper>
          <Story />
        </Wrapper>
      );
    },
  ],
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
      query: {},
    },
  },
} as Meta<typeof TabNavigation>;

export const Default = {
  args: {
    tabs: [
      {
        title: 'Profile',
        path: '',
        Icon: UserIcon,
      },
      {
        title: 'Repos',
        Icon: ClipboardDocumentListIcon,
      },
    ],
  },
};
