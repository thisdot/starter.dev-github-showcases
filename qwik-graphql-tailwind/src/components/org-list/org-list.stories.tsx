import { Meta } from '@storybook/html';
import { OrgList, OrgListProps } from './org-list';

export default {
  title: 'Organizations List',
} as Meta;

const Template = (args: OrgListProps) => <OrgList organizations={args.organizations} />;

export const Demo: any = Template.bind({
  organzations: [],
});

Demo.args = {
  organizations: [
    {
      avatarUrl: '//avatars.githubusercontent.com/u/22839396?v=4',
      login: 'thisdot',
    },
    {
      avatarUrl: '//avatars.githubusercontent.com/u/22839396?v=4',
      login: 'thisdot',
    },
  ],
};
