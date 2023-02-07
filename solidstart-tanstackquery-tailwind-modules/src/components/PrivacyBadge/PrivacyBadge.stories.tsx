import PrivacyBadge from './PrivacyBadge';

export default {
  title: 'Components/PrivacyBadge',
  argTypes: {
    visibility: {},
  },
};

const Template = (args: any) => <PrivacyBadge {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  visibility: 'Private',
};
