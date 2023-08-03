import { visibilityTypes } from '../RepoHeading/data';
import PrivacyBadge from './PrivacyBadge';

export default {
  title: 'Components/PrivacyBadge',
  argTypes: {
    visibility: {
      options: Object.values(visibilityTypes),
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: any) => <PrivacyBadge {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  visibility: 'Private',
};
