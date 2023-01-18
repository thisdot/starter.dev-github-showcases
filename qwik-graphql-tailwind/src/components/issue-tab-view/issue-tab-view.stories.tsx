import { mockedIssuesQuery } from '../../mock/mockedIssues';
import { IssueTabView, IssuesProps } from '.';

export default {
  title: 'Issue Tab View',
  argTypes: {
    activeTab: {},
  },
};

const Template = (args: IssuesProps) => <IssueTabView {...args} />;

export const Default: any = Template.bind({});

Default.parameters = {
  msw: {
    handlers: mockedIssuesQuery,
  },
};

Default.args = {
  activeTab: 'open',
  owner: 'thisdot',
  name: 'starter.dev-github-showcases',
};
