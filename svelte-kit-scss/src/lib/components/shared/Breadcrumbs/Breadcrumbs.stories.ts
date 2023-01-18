import type { Meta, StoryObj } from '@storybook/svelte';

import { MOCK_BREADCRUMBS } from '$lib/helpers/mocks/repository';
import Breadcrumbs from './Breadcrumbs.svelte';

const meta = {
  title: 'Home/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumbs: MOCK_BREADCRUMBS,
  },
};
