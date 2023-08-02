import { Router } from '@solidjs/router';
import RepoHeading, { RepoHeadingProps } from './RepoHeading';
import { visibilityTypes } from './data';

export default {
  component: RepoHeading,
  title: 'RepoPage/RepoHeading',
  argTypes: {
    isOrg: {
      control: {
        type: 'boolean',
      },
    },
    visibility: {
      options: Object.values(visibilityTypes),
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: RepoHeadingProps) => (
  <Router>
    <RepoHeading {...args} />
  </Router>
);

export const Default: any = Template.bind({});
Default.args = {
  isOrg: false,
  visibility: visibilityTypes.public,
};
