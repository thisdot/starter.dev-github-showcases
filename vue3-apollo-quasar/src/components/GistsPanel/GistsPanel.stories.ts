// import { USER_GISTS_QUERY } from '@/composables/github/queries';
import GistsPanel from './GistsPanel.vue';

export default {
  title: 'component/GistsPanel',
  component: GistsPanel,
  argTypes: {},
};

// const testData = {
//   gists: {
//     nodes: [
//       {
//         id: '',
//         description: 'hello',
//         name: 'nope',
//         url: '',
//       },
//     ],
//   },
// };

const Template = (args) => ({
  components: { GistsPanel },
  setup() {
    return { args };
  },
  template: '<GistsPanel v-bind="args" />',
});

export const Default = Template.bind({});

// Default.parameters = {
//   apolloClient: {
//     mocks: [
//       {
//         request: {
//           query: USER_GISTS_QUERY,
//         },
//         result: {
//           data: {
//             viewer: {
//               gists: {
//                 nodes: [],
//               },
//             },
//           },
//         },
//       },
//     ],
//   },
// };
Default.args = {};
