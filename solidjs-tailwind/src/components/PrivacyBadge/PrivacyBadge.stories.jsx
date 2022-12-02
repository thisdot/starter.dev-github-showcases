import PrivacyBadge from './PrivacyBadge';

export default {
  title: 'Components/PrivacyBadge',
  argTypes: {
    isPrivate: true,
    className: '',
  },
};

const Template = (args) => <PrivacyBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPrivate: true,
  className: 'text-red-500',
};
