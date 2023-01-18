import type { Meta, StoryObj } from '@storybook/svelte';

import { gistsFixture } from '$lib/fixtures';
import Gists from './Gists.svelte';

const meta = {
  title: 'Home/Gists',
  component: Gists,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Gists>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gists: gistsFixture,
  },
};

export const Empty: Story = {
  args: {
    gists: [],
  },
};
