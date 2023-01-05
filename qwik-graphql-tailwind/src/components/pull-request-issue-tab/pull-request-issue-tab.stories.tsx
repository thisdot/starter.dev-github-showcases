import { component$ } from '@builder.io/qwik';
import { Meta } from '@storybook/html';
import { sortOptions } from '../issue-tab-view/data';
import { PRIssueContextProvider } from './pr-issue-context-provider';
import { PullRequestIssueTab, PullRequestIssueTabParams } from './pull-request-issue-tab';

export default {
  title: 'Pull-Request-Issue Tab',
  argTypes: {
    openCount: {},
    closedCount: {},
    tabType: {
      control: 'select',
      options: ['pr', 'issue'],
    },
    milestonesOption: {},
    labelOption: {},
    sortOption: {},
  },
} as Meta;

const labelOptions = [
  { label: 'label 1', value: 'label 1' },
  { label: 'label 2', value: 'label 2' },
];

const milestonesOptions = [
  { label: 'milestone 1', value: 'milestone 1' },
  { label: 'milestone 2', value: 'milestone 2' },
];

const Template = component$((args: PullRequestIssueTabParams) => {
  return (
    <PRIssueContextProvider activeTab="open">
      <PullRequestIssueTab {...args} />
    </PRIssueContextProvider>
  );
});

export const Default: any = Template.bind({});

Default.args = {
  openCount: 10,
  closedCount: 300,
  tabType: 'issue',
  milestonesOption: milestonesOptions,
  labelOption: labelOptions,
  sortOption: sortOptions,
};
