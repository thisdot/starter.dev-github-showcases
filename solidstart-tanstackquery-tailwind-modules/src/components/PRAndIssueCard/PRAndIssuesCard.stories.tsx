import { Router } from '@solidjs/router';
import PRAndIssuesCard, { PRAndIssuesCardProps } from './PRAndIssueCard';
import { testData } from './data';

export default {
  title: 'Components/PRAndIssuesCard',
  argTypes: {
    number: {},
    title: {},
    url: {},
    state: {},
    createdAt: {},
    closedAt: {},
    authorName: {},
    commentCount: {},
    labels: {},
    type: {
      options: ['pr', 'issue'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: PRAndIssuesCardProps) => (
  <Router>
    <PRAndIssuesCard {...args} />
  </Router>
);

export const Default: any = Template.bind({});
Default.args = {
  ...testData,
};
