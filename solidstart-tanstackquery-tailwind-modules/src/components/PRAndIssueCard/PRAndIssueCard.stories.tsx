import { Router } from '@solidjs/router';
import PRAndIssueCard, { PRAndIssueCardProps } from './PRAndIssueCard';
import { testData } from './data';

export default {
  title: 'Components/PRAndIssuesCard',
  argTypes: {
    number: {},
    title: {},
    url: {},
    state: {
      options: ['OPEN', 'CLOSED', 'MERGED'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['pr', 'issue'],
      control: {
        type: 'select',
      },
    },
    createdAt: {},
    closedAt: {},
    authorName: {},
    commentCount: {},
    labels: {},
  },
};

const Template = (args: PRAndIssueCardProps) => (
  <Router>
    <PRAndIssueCard {...args} />
  </Router>
);

export const Default: any = Template.bind({});
Default.args = {
  ...testData,
};
