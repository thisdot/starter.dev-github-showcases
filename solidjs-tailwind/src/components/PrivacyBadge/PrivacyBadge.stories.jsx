import PrivacyBadge from './PrivacyBadge';

export default {
  title: 'Components/PrivacyBadge',
  argTypes: {
    visibility: {},
  },
};

const Template = (args) => <PrivacyBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  visibility: 'Private'
};
