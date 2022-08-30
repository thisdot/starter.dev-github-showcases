import GistsPanel from './GistsPanel.vue';
import { mockedUserGistsQuery } from './mockedUserGists';

export default {
  title: 'component/GistsPanel',
  component: GistsPanel,
  argTypes: {},
};

const Template = (args) => ({
  components: { GistsPanel },
  setup() {
    return { args };
  },
  template: '<GistsPanel v-bind="args" />',
});

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [mockedUserGistsQuery],
  },
};
Default.args = {};
