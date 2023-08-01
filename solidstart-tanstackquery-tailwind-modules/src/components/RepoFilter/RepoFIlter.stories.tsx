import RepoFilter, { RepoFilterProps } from './RepoFilter';

export default {
  title: 'components/ Repo filter',
  argTypes: {},
};

const Template = (args: RepoFilterProps) => <RepoFilter {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  repoBtnText: 'New',
};
