import { TABS } from '../pull-request-issue-tab/data';
import { IssueTabView, IssuesProps } from './issue-tab-view';

export default {
  title: 'Issue Tab View',
  argTypes: {
    activeTab: {},
  },
};

const Template = (args: IssuesProps) => <IssueTabView {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  activeTab: TABS.OPEN,
  owner: 'thisdot',
  name: 'starter.dev-github-showcases',
};
